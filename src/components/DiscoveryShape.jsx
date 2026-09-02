import { useEffect, useRef } from 'react'
import {
  BufferGeometry,
  Clock,
  Group,
  IcosahedronGeometry,
  Line,
  LineBasicMaterial,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  ShaderMaterial,
  SphereGeometry,
  SRGBColorSpace,
  Vector3,
  WebGLRenderer,
} from 'three'

const vertexShader = `
  uniform float uTime;
  varying vec3 vNormal;
  varying vec3 vPosition;

  void main() {
    vec3 pos = position;
    float primaryWave = sin(pos.y * 2.3 + uTime * 0.65) * 0.075;
    float crossWave = sin(pos.x * 3.7 - uTime * 0.4) * 0.04;
    pos += normal * (primaryWave + crossWave);
    pos.x += sin(pos.y * 1.45 + uTime * 0.22) * 0.11;
    pos.z *= 0.86;

    vec4 viewPosition = modelViewMatrix * vec4(pos, 1.0);
    vNormal = normalize(normalMatrix * normal);
    vPosition = pos;
    gl_Position = projectionMatrix * viewPosition;
  }
`

const fragmentShader = `
  uniform float uTime;
  varying vec3 vNormal;
  varying vec3 vPosition;

  void main() {
    vec3 acid = vec3(0.851, 1.0, 0.263);
    vec3 coral = vec3(1.0, 0.357, 0.267);
    vec3 violet = vec3(0.424, 0.361, 1.0);
    vec3 ink = vec3(0.012, 0.012, 0.012);

    float facing = abs(dot(normalize(vNormal), vec3(0.0, 0.0, 1.0)));
    float rim = pow(1.0 - facing, 2.2);
    float band = sin(vPosition.y * 4.2 + vPosition.x * 1.6 + uTime * 0.55) * 0.5 + 0.5;
    float cut = smoothstep(0.43, 0.57, band);
    vec3 spectrum = mix(acid, coral, cut);
    spectrum = mix(spectrum, violet, smoothstep(0.7, 1.45, vPosition.x + rim));
    vec3 color = mix(ink, spectrum, 0.28 + rim * 0.82);
    color += acid * pow(facing, 7.0) * 0.18;

    gl_FragColor = vec4(color, 1.0);
  }
`

export default function DiscoveryShape({ onReady }) {
  const mountRef = useRef(null)

  useEffect(() => {
    const mount = mountRef.current
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const coarsePointer = window.matchMedia('(pointer: coarse)').matches
    let renderer

    try {
      renderer = new WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' })
    } catch {
      mount.classList.add('webgl-fallback')
      onReady?.()
      return undefined
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, coarsePointer ? 1.4 : 2))
    renderer.setClearColor(0x000000, 0)
    renderer.outputColorSpace = SRGBColorSpace
    renderer.domElement.setAttribute('aria-label', 'Interactive generative discovery sculpture')
    renderer.domElement.setAttribute('role', 'img')
    mount.appendChild(renderer.domElement)

    const scene = new Scene()
    const camera = new PerspectiveCamera(33, 1, 0.1, 100)
    camera.position.set(0, 0, 7.2)

    const group = new Group()
    scene.add(group)

    const geometry = new IcosahedronGeometry(1.58, coarsePointer ? 4 : 5)
    const material = new ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: { uTime: { value: 0 } },
    })
    const core = new Mesh(geometry, material)
    core.scale.set(1.08, 1.28, 1)
    core.rotation.set(-0.18, 0, -0.2)
    group.add(core)

    const cageGeometry = new IcosahedronGeometry(1.73, 2)
    const cageMaterial = new MeshBasicMaterial({
      color: 0xd9ff43,
      wireframe: true,
      transparent: true,
      opacity: 0.2,
      depthWrite: false,
    })
    const cage = new Mesh(cageGeometry, cageMaterial)
    cage.scale.set(1.08, 1.28, 1)
    cage.rotation.copy(core.rotation)
    group.add(cage)

    const orbitMaterial = new LineBasicMaterial({ color: 0xf0eee5, transparent: true, opacity: 0.26 })
    const orbitPoints = Array.from({ length: 129 }, (_, index) => {
      const angle = (index / 128) * Math.PI * 2
      return new Vector3(Math.cos(angle) * 2.55, Math.sin(angle) * 1.07, 0)
    })
    const orbitGeometry = new BufferGeometry().setFromPoints(orbitPoints)
    const orbit = new Line(orbitGeometry, orbitMaterial)
    orbit.rotation.set(0.55, -0.2, -0.22)
    group.add(orbit)

    const satellite = new Mesh(
      new SphereGeometry(0.075, 18, 18),
      new MeshBasicMaterial({ color: 0xff5b44 }),
    )
    group.add(satellite)

    const pointer = { x: 0, y: 0, targetX: 0, targetY: 0 }
    const clock = new Clock()
    let frame = 0

    const resize = () => {
      const width = mount.clientWidth
      const height = mount.clientHeight
      if (!width || !height) return
      renderer.setSize(width, height, false)
      camera.aspect = width / height
      camera.updateProjectionMatrix()
    }

    const move = (event) => {
      const rect = mount.getBoundingClientRect()
      pointer.targetX = ((event.clientX - rect.left) / rect.width - 0.5) * 2
      pointer.targetY = ((event.clientY - rect.top) / rect.height - 0.5) * 2
    }

    const leave = () => {
      pointer.targetX = 0
      pointer.targetY = 0
    }

    const render = () => {
      const elapsed = clock.getElapsedTime()
      pointer.x += (pointer.targetX - pointer.x) * 0.045
      pointer.y += (pointer.targetY - pointer.y) * 0.045
      material.uniforms.uTime.value = reducedMotion ? 0.7 : elapsed
      group.rotation.y = (reducedMotion ? 0.35 : elapsed * 0.085) + pointer.x * 0.22
      group.rotation.x = pointer.y * 0.14
      cage.rotation.y = reducedMotion ? 0.4 : -elapsed * 0.11
      orbit.rotation.z = (reducedMotion ? 0.2 : elapsed * 0.045) - 0.22
      const satelliteAngle = reducedMotion ? 0.8 : elapsed * 0.38
      satellite.position.set(Math.cos(satelliteAngle) * 2.48, Math.sin(satelliteAngle) * 1.02, Math.sin(satelliteAngle) * 0.42)
      renderer.render(scene, camera)
      if (!reducedMotion) frame = requestAnimationFrame(render)
    }

    const observer = new ResizeObserver(resize)
    observer.observe(mount)
    mount.addEventListener('pointermove', move)
    mount.addEventListener('pointerleave', leave)
    resize()
    render()
    onReady?.()

    return () => {
      cancelAnimationFrame(frame)
      observer.disconnect()
      mount.removeEventListener('pointermove', move)
      mount.removeEventListener('pointerleave', leave)
      geometry.dispose()
      material.dispose()
      cageGeometry.dispose()
      cageMaterial.dispose()
      orbitGeometry.dispose()
      orbitMaterial.dispose()
      satellite.geometry.dispose()
      satellite.material.dispose()
      renderer.dispose()
      renderer.domElement.remove()
    }
  }, [onReady])

  return (
    <div ref={mountRef} className="discovery-shape">
      <div className="shape-fallback" aria-hidden="true" />
    </div>
  )
}
