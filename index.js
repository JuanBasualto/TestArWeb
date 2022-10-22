const THREE = window.MINDAR.IMAGE.THREE;

const mindarThree = new window.MINDAR.IMAGE.MindARThree({
  container: document.getElementById("container"),
  imageTargetSrc: "targets.mind"
});

const { renderer, scene, camera } = mindarThree;


const anchor = mindarThree.addAnchor(0);
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ffff, transparent: true, opacity: 0.5 });
const plane = new THREE.Mesh(geometry, material);
anchor.group.add(plane);


const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");
startButton.addEventListener("click", () => {
  start();
});
stopButton.addEventListener("click", () => {
  mindarThree.stop();
  mindarThree.renderer.setAnimationLoop(null);
});


const start = async () => {
  await mindarThree.start();
  renderer.setAnimationLoop(() => {
    renderer.render(scene, camera);
  });
}