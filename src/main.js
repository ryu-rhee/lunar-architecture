import * as THREE from 'three'
import './index.css'

const scene = new THREE.Scene()
const sizes = { width: window.innerWidth, height: window.innerHeight }

const camera = new THREE.PerspectiveCamera(
  45,
  sizes.width / sizes.height,
  1,
  1000
)
scene.add(camera)

const renderer = new THREE.WebGLRenderer()
renderer.render(scene, camera)
renderer.setSize(sizes.width, sizes.height)
document.body.appendChild(renderer.domElement)
