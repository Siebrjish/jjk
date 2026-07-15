import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.179/build/three.module.js';

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x87ceeb);

const camera = new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
1000
);

const renderer = new THREE.WebGLRenderer({
antialias:true
});

renderer.setSize(window.innerWidth,window.innerHeight);
renderer.shadowMap.enabled=true;

document.body.appendChild(renderer.domElement);

const light=new THREE.DirectionalLight(0xffffff,3);
light.position.set(5,10,5);

light.castShadow=true;

scene.add(light);

scene.add(new THREE.AmbientLight(0xffffff,1));

const ground=new THREE.Mesh(
new THREE.PlaneGeometry(100,100),
new THREE.MeshStandardMaterial({
color:0x3cb043
})
);

ground.rotation.x=-Math.PI/2;
ground.receiveShadow=true;

scene.add(ground);

const player=new THREE.Mesh(
new THREE.BoxGeometry(1,2,1),
new THREE.MeshStandardMaterial({
color:0x0066ff
})
);

player.position.y=1;
player.castShadow=true;

scene.add(player);

camera.position.set(0,5,8);
camera.lookAt(player.position);

function animate(){

requestAnimationFrame(animate);

renderer.render(scene,camera);

}

animate();

window.addEventListener("resize",()=>{

camera.aspect=window.innerWidth/window.innerHeight;

camera.updateProjectionMatrix();

renderer.setSize(window.innerWidth,window.innerHeight);

});
