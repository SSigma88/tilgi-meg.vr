import * as THREE from 'three';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer();
renderer.setClearColor(0xFFFFFFE0);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
var pyramidgeometry=new THREE.CylinderGeometry(0, 0.8, 2, 4);
var pyramidmaterial=new THREE.MeshLambertMaterial({color: 0xF3FFE2});
var pyramidmesh=new THREE.Mesh(pyramidgeometry, pyramidmaterial);
scene.add(cube);
cube.position.x = -2;
scene.add(pyramidmesh);
var lightOne = new THREE.AmbientLight(0xFFFFFF, 1);
scene.add(lightOne);
var lightTwo = new THREE.PointLight(0xFFFFFF, 1.5);
scene.add(lightTwo);

lightTwo.position.y = 1;
lightTwo.position.x = 1.5;

function animate() {
    requestAnimationFrame(animate);
    pyramidmesh.rotation.y += 0.01;
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    
    renderer.render(scene, camera);
}

animate();

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});