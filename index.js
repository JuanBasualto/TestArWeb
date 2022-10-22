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

// var joy = new JoyStick('joyDiv');
// setInterval(function(){ 
//    console.log("x="+ joy.GetX());
//  }, 50);

var Joy1 = new JoyStick('joyDiv', {}, function(stickData) {
  // joy1IinputPosX.value = stickData.xPosition;
  // joy1InputPosY.value = stickData.yPosition;
  // joy1Direzione.value = stickData.cardinalDirection;
  // joy1X.value = stickData.x;
  // joy1Y.value = stickData.y;
  console.log(stickData.x);
});


const start = async () => {
  await mindarThree.start();
  renderer.setAnimationLoop(() => {
    renderer.render(scene, camera);
  });
}