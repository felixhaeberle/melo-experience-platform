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

    // const dragLoop = new Audio('sounds/ui_drag.wav')
    // dragLoop.loop = true;
    let positions = {
      pos1: 0,
      pos2: 0,
      pos3: 0,
      pos4: 0
    }
    
    const dragMouseDown = (e) => {
      // Sounds
      dragSound.play();
      dropSound.pause();
      dropSound.load();
      
      let elmnt = e.target;
      e.preventDefault();
      // get the mouse cursor position at startup:
      positions.pos3 = e.clientX;
      positions.pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag(e, elmnt, positions);
    }

    function elementDrag(e, elmnt, positions) {
      e.preventDefault();
      // calculate the new cursor position:
      positions.pos1 = positions.pos3 - e.clientX;
      positions.pos2 = positions.pos4 - e.clientY;
      positions.pos3 = e.clientX;
      positions.pos4 = e.clientY;
      // set the element's new position:
      elmnt.styles.top = (elmnt.offsetTop - positions.pos2) + "px";
      elmnt.styles.left = (elmnt.offsetLeft - positions.pos1) + "px";
    }

    function closeDragElement() {
      /* stop moving when mouse button is released:*/
      // Sounds
      dragSound.pause();
      dragSound.load();
      dropSound.play();
      document.onmouseup = null;
      document.onmousemove = null;
    }

  return (
    <div className={styles.wrapper}>
      <div className={styles.btnWrapper}>
        <div className={styles.btn} onClick={() => {loopOn()}}>Loop On</div>
        <div className={styles.btn} onClick={() => {loopOff()}}>Loop Off</div>
      </div>
      <div id="dragSample" className={styles.dragSample} onMouseMove={(event) => {dragMouseDown(event)}}> 
        <p className={styles.text}>Drag Me</p>
      </div>
    </div>
  )
}