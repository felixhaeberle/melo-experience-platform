import styles from '../../../styles/drag.module.css'

export default function Drag() {
  // Audio
  const dragSound = new Audio('/examples/drag/ui_drag.wav');
  const dropSound = new Audio('/examples/drag/ui_drop.wav');

  const loopOn = () => {
    dragSound.loop = true;
  }

  const loopOff = () => {
    dragSound.loop = false;
  }
  
  window.onload = addListeners;
  let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

  function addListeners(){
      document.getElementById('dragSample').addEventListener('mousedown', mouseDown, false);
      window.addEventListener('mouseup', mouseUp, false);
  }

  function mouseUp()
  {
    dropSound.play();
    dragSound.pause();
    dragSound.load();
    window.removeEventListener('mousemove', divMove, true);
  }

  function mouseDown(e){
    dragSound.play();
    dropSound.pause();
    dropSound.load();
    window.addEventListener('mousemove', divMove, true);
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
  }

  function divMove(e){
    var div = document.getElementById('dragSample');

    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    div.style.top = (div.offsetTop - pos2) + "px";
    div.style.left = (div.offsetLeft - pos1) + "px";
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.btnWrapper}>
        <div className={styles.btn} onClick={() => {loopOn()}}>Loop On</div>
        <div className={styles.btn} onClick={() => {loopOff()}}>Loop Off</div>
      </div>
      <div id="dragSample" className={styles.dragSample} > 
        <p className={styles.text}>Drag Me</p>
      </div>
    </div>
  )
}