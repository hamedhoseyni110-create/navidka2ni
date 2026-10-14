import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BufferGeometry();
const count = 2000;
const pos = new Float32Array(count * 3);
for(let i=0; i<count*3; i++) pos[i] = (Math.random()-0.5)*50;
geometry.setAttribute('position', new THREE.BufferAttribute(pos, 3));
const material = new THREE.PointsMaterial({ size: 0.1, color: 0x00ffcc });
const particles = new THREE.Points(geometry, material);
scene.add(particles);

camera.position.z = 30;

function animate() {
    requestAnimationFrame(animate);
    particles.rotation.y += 0.002;
    particles.rotation.x += 0.001;
    renderer.render(scene, camera);
}
animate();

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
