import gsap from 'gsap'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import './index.css'

const scene = new THREE.Scene()
const sizes = { width: window.innerWidth, height: window.innerHeight }

const light = new THREE.PointLight(0xffffff, 1.25, 100)
light.position.set(0, 10, 10)
scene.add(light)

const geometry = new THREE.SphereGeometry(5, 64, 32)
const material = new THREE.MeshStandardMaterial({
  color: 0x9496ff,
  wireframe: true
})
const sphere = new THREE.Mesh(geometry, material)
scene.add(sphere)

const camera = new THREE.PerspectiveCamera(
  45,
  sizes.width / sizes.height,
  1,
  1000
)
camera.position.z = 20
scene.add(camera)

const renderer = new THREE.WebGLRenderer()
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)
document.body.appendChild(renderer.domElement)

const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true
controls.autoRotate = true
controls.autoRotateSpeed = 5

const animate = () => {
  requestAnimationFrame(animate)
  controls.update()
  renderer.render(scene, camera)
}
animate()

let mouseEffect = false
window.addEventListener('mousedown', () => (mouseEffect = true))
window.addEventListener('mouseup', () => (mouseEffect = false))
window.addEventListener('mousemove', e => {
  const randomColor = () => {
    const rgb = [
      Math.round((e.pageX / sizes.width) * 255),
      Math.round((e.pageY / sizes.height) * 255),
      155
    ]
    const color = new THREE.Color(`rgb(${rgb.join(',')})`)
    gsap.to(sphere.material.color, {
      r: color.r,
      g: color.g,
      b: color.b
    })
  }
  mouseEffect && randomColor()
})

window.addEventListener('resize', () => {
  sizes.width = window.innerWidth
  sizes.height = window.innerHeight
  camera.aspect = sizes.width / sizes.height
  camera.updateProjectionMatrix()
  renderer.setSize(sizes.width, sizes.height)
})

const tl = gsap.timeline({ defaults: { duration: 2 } })
tl.fromTo(sphere.scale, { x: 0, y: 0 }, { x: 1, y: 1, delay: 1 })
