import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";




//Global variables
let currentRef = null;

//Scene, camera, renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(25, 100 / 100, 0.1, 100);
scene.add(camera);
camera.position.set(0, 30, 20);
//camera.lookAt(new THREE.Vector3());

const renderer = new THREE.WebGLRenderer();
renderer.setSize(100, 100);

//OrbitControls
const orbitControls = new OrbitControls(camera, renderer.domElement);
orbitControls.enableDamping = true;

//Resize canvas
const resize = () => {
  renderer.setSize(currentRef.clientWidth, currentRef.clientHeight);
  camera.aspect = currentRef.clientWidth / currentRef.clientHeight;
  camera.updateProjectionMatrix();
};
window.addEventListener("resize", resize);



//cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshBasicMaterial()
        
const cube = new THREE.Mesh(geometry, material);
  const cube2 = new THREE.Mesh( geometry, material );
        

cube.position.z = -10;
cube.position.y = 6;
cube.position.x = -8;
 
cube2.position.z = -10;
cube2.position.y = 6;
 cube2.position.x = 8;
// plane.position.y = -1;
scene.add(cube);
scene.add(cube2);

// scene.add(plane);


 const loader = new THREE.TextureLoader()
    loader.load("./ladrillo.png", (texture)=>{
      material.map = texture;
      animate();
})


//model 3d


const gltfLoader = new GLTFLoader();

gltfLoader.load('./model/adidas/scene.gltf',
  (gltf) => {
    scene.add(gltf.scene);
    gltf.scene.position.x = 13;
    gltf.scene.position.z = 5;
     gltf.scene.position.y = 2;
    gltf.scene.scale.set(8, 8, 8);
  },
  () => {
  console.log("Cargando");
}, () => {
  console.log("Error");
})

gltfLoader.load('./model/ball/scene.gltf',
  (gltf) => {
    scene.add(gltf.scene);
    gltf.scene.position.x = -11.5;
    gltf.scene.position.z = 1;
    
    gltf.scene.position.y = 0.5;
    
   
  },
  () => {
  console.log("Cargando");
}, () => {
  console.log("Error");
})


gltfLoader.load('./model/nike/scene.gltf',
  (gltf) => {
    scene.add(gltf.scene);
    gltf.scene.position.x = 11;
    gltf.scene.position.z = 5;
     gltf.scene.position.y = 0.6;
    //gltf.scene.scale.set(8, 8, 8);
  },
  () => {
  console.log("Cargando");
}, () => {
  console.log("Error");
})

gltfLoader.load('./model/rugby_ball/scene.gltf',
  (gltf) => {
    scene.add(gltf.scene);
    gltf.scene.position.x = -11;
    gltf.scene.position.z = 5;
     gltf.scene.position.y = 0;
    gltf.scene.scale.set(3, 3, 3);
  },
  () => {
  console.log("Cargando");
}, () => {
  console.log("Error");
})

gltfLoader.load('./model/shoes/scene.gltf',
  (gltf) => {
    scene.add(gltf.scene);
    gltf.scene.position.x = 11;
    gltf.scene.position.z = 8;
     gltf.scene.position.y = 0;
    gltf.scene.scale.set(1, 1, 1);
  },
  () => {
  console.log("Cargando");
}, () => {
  console.log("Error");
})
gltfLoader.load('./model/telephone/scene.gltf',
  (gltf) => {
    scene.add(gltf.scene);
    gltf.scene.position.x = -2;
    gltf.scene.position.z = 0;
     gltf.scene.position.y = 2;
    gltf.scene.scale.set(1, 1, 1);
  },
  () => {
  console.log("Cargando");
}, () => {
  console.log("Error");
})


gltfLoader.load('./model/watch/scene.gltf',
  (gltf) => {
    scene.add(gltf.scene);
    gltf.scene.position.z = 2;
    gltf.scene.position.y = 1;
    gltf.scene.position.x = 0;
    gltf.scene.scale.set(7, 7, 7);
  },
  () => {
  console.log("Cargando");
}, () => {
  console.log("Error");
})
gltfLoader.load('./model/room/scene.gltf',
  (gltf) => {
    scene.add(gltf.scene);
    gltf.scene.position.z = 0;
    
  },
  () => {
  console.log("Cargando");
}, () => {
  console.log("Error");
})



const light1 = new THREE.DirectionalLight(0xffffff, 3);
light1.position.set(-8, 6, -10);
scene.add(light1);
const light2 = new THREE.DirectionalLight(0xffffff, 3);
light1.position.set(8, 6, -10);
scene.add(light2);

const light3 = new THREE.DirectionalLight(0xffffff, 2);
light1.position.set(0, 6, 20);
scene.add(light3);

//Init and mount the scene
export const initScene = (mountRef) => {
  currentRef = mountRef.current;
  resize();
  currentRef.appendChild(renderer.domElement);
};

//Dismount and clena up the buffer from the scene
export const cleanUpScene = () => {
  scene.dispose();
  currentRef.removeChild(renderer.domElement);
};


const animate = () => {
  
  orbitControls.update();
  cube.rotation.y += 0.005;
  cube2.rotation.y += 0.005;
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
};

animate();
