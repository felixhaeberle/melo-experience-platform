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

    // Make the DIV element draggable:
    dragElement(document.getElementById("dragSample"));

    function dragElement(elmnt) {
      var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
      if (document.getElementById(elmnt.id + "header")) {
        // if present, the header is where you move the DIV from:
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
      } else {
        // otherwise, move the DIV from anywhere inside the DIV:
        elmnt.onmousedown = dragMouseDown;
      }

      function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;

        dragSound.play();
        dropSound.pause();
        dropSound.load();
      }

      function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
      }

      function closeDragElement() {
        // stop moving when mouse button is released:
        dropSound.play();
        dragSound.pause();
        dragSound.load();
        document.onmouseup = null;
        document.onmousemove = null;
      }
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