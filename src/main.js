import * as THREE from 'three'
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
