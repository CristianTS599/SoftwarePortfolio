import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"

export function InitVRScene(canvas: HTMLCanvasElement) {
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(
    75,
    canvas.clientWidth / canvas.clientHeight,
    0.2,
    1000
  )

  const renderer = new THREE.WebGLRenderer({ canvas })
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(canvas.clientWidth, canvas.clientHeight)
  camera.position.setZ(30)

  //renderer.render(scene, camera)

  // create shape just to see things
  const ring = new THREE.RingGeometry(5, 10, 8, 8, 0, 6.2831)
  const material = new THREE.MeshStandardMaterial({
    color: 0xffd700,
    wireframe: true,
  })
  const ringMesh = new THREE.Mesh(ring, material)

  const ambiantLight = new THREE.AmbientLight(0xffffff)
  scene.add(ringMesh, ambiantLight)

  const controls = new OrbitControls(camera, renderer.domElement)
  const background = new THREE.TextureLoader().load(
    "/public/ProjectImgs/VR/backimages/DarkSpace1.jpg"
  )
  background.colorSpace = THREE.SRGBColorSpace

  // Scale texture to cover without stretching
  const canvasAspect = canvas.clientWidth / canvas.clientHeight
  const imageAspect = 4104 / 2736 // your image's actual dimensions
  const scale = canvasAspect / imageAspect

  background.repeat.set(Math.max(1, scale), Math.max(1, 1 / scale))
  background.offset.set(
    (1 - background.repeat.x) / 2,
    (1 - background.repeat.y) / 2
  )
  background.wrapS = THREE.RepeatWrapping
  background.wrapT = THREE.RepeatWrapping

  scene.background = background

  const CreateStars = () => {
    let shape = new THREE.TetrahedronGeometry(2, 0)
    let material = new THREE.MeshStandardMaterial({
      color: 0xffd700,
    })
    let shapeMesh = new THREE.Mesh(shape, material)

    const [x, y, z] = Array(3)
      .fill(0)
      .map(() => THREE.MathUtils.randFloatSpread(600))
    shapeMesh.position.set(x, y, z)
    scene.add(shapeMesh)
  }

  Array(500).fill(0).forEach(CreateStars)

  const planetTexture = new THREE.TextureLoader().load(
    "/public/ProjectImgs/VR/planettextures/red1.jpg"
  )

  const sphere = new THREE.SphereGeometry(15, 32, 16, 0, 6.2831, 0, 3.1415)
  const planet = new THREE.Mesh(
    sphere,
    new THREE.MeshBasicMaterial({ map: planetTexture })
  )

  planet.position.x = -20
  planet.position.z = -100

  const planet2 = new THREE.Mesh(
    new THREE.SphereGeometry(30, 32, 16, 0, 6.2831, 0, 3.1415),
    new THREE.MeshBasicMaterial({
      map: new THREE.TextureLoader().load(
        "/public/ProjectImgs/VR/planettextures/forest.jpg"
      ),
    })
  )

  planet2.position.x = 200
  planet2.position.z = -400

  const planet3 = new THREE.Mesh(
    new THREE.SphereGeometry(10, 32, 16, 0, 6.2831, 0, 3.1415),
    new THREE.MeshBasicMaterial({
      map: new THREE.TextureLoader().load(
        "/public/ProjectImgs/VR/planettextures/purple1.jpg"
      ),
    })
  )
  planet3.position.x = -50

  const planet4 = new THREE.Mesh(
    new THREE.SphereGeometry(40, 32, 16, 0, 6.2831, 0, 3.1415),
    new THREE.MeshBasicMaterial({
      map: new THREE.TextureLoader().load(
        "/public/ProjectImgs/VR/planettextures/blue1.jpg"
      ),
    })
  )
  planet4.position.x = 600

  const planet5 = new THREE.Mesh(
    new THREE.SphereGeometry(30, 32, 16, 0, 6.2831, 0, 3.1415),
    new THREE.MeshBasicMaterial({
      map: new THREE.TextureLoader().load(
        "/public/ProjectImgs/VR/planettextures/green1.jpg"
      ),
    })
  )
  planet5.position.z = 400

  const planet6 = new THREE.Mesh(
    new THREE.SphereGeometry(50, 32, 16, 0, 6.2831, 0, 3.1415),
    new THREE.MeshBasicMaterial({
      map: new THREE.TextureLoader().load(
        "/public/ProjectImgs/VR/planettextures/brown1.webp"
      ),
    })
  )
  planet6.position.z = 300
  planet6.position.x = 200
  planet6.position.y = 30

  const planet6Ring = new THREE.Mesh(
    new THREE.RingGeometry(70, 100, 30, 8, 0, 6.2831),
    new THREE.MeshBasicMaterial({
      color: 0xb87333,
      wireframe: true,
    })
  )
  planet6Ring.position.z = 300
  planet6Ring.position.x = 200
  planet6Ring.position.y = 30
  planet6Ring.rotateX(96)

  const planet7 = new THREE.Mesh(
    new THREE.SphereGeometry(50, 32, 16, 0, 6.2831, 0, 3.1415),
    new THREE.MeshBasicMaterial({
      map: new THREE.TextureLoader().load(
        "/public/ProjectImgs/VR/planettextures/red2.jpg"
      ),
    })
  )
  planet7.position.z = 300
  planet7.position.x = -200

  const planet8 = new THREE.Mesh(
    new THREE.SphereGeometry(45, 32, 16, 0, 6.2831, 0, 3.1415),
    new THREE.MeshBasicMaterial({
      color: 0x000,
    })
  )

  planet8.position.x = -400
  planet8.position.z = -800
  planet8.rotateY(10)

  scene.add(
    planet,
    planet2,
    planet3,
    planet4,
    planet5,
    planet6,
    planet6Ring,
    planet7,
    planet8
  )

  let animFramId: number
  function animate() {
    animFramId = requestAnimationFrame(animate)

    ringMesh.rotation.x += 0.05
    ringMesh.rotation.y += 0.005
    ringMesh.rotation.z += 0.01

    planet.rotation.y += 0.005
    planet2.rotation.y += 0.005
    planet3.rotation.y += 0.005
    planet4.rotation.y += 0.009
    planet5.rotation.y += 0.005
    planet6.rotation.y += 0.01
    planet6Ring.rotation.z += 0.008
    planet7.rotation.y += 0.005
    planet8.rotation.y += 0.005

    controls.update()
    renderer.render(scene, camera)
  }

  animate()

  return () => {
    cancelAnimationFrame(animFramId)
    renderer.dispose()
  }
}
