import ClientOnly from '../../../components/ClientOnly'
import Layout from '../../../components/Layout'
import styles from './styles.module.css'
import { useEffect } from 'react'

export default function Drag() {
  
  useEffect(() => {
    // Audio
    const dragSound = new Audio('/examples/drag/ui_drag.wav');
    const dropSound = new Audio('/examples/drag/ui_drop.wav');

    loopOn = () => {
      dragSound.loop = true;
    }

    loopOff = () => {
      dragSound.loop = false;
    }

    // const dragLoop = new Audio('sounds/ui_drag.wav')
    // dragLoop.loop = true;

    dragMouseDown = (event) => {
      // Sounds
      dragSound.play();
      dropSound.pause();
      dropSound.load();
      
      let elmnt = event.target;
      e = e || event;
      e.preventDefault();
      let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
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
      /* stop moving when mouse button is released:*/
      // Sounds
      dragSound.pause();
      dragSound.load();
      dropSound.play();
      document.onmouseup = null;
      document.onmousemove = null;
    }
  })

  return (
    <Layout>
      <ClientOnly>
        <div className={styles.btnWrapper}>
          <button className={styles.btn} type="button" onClick={() => {loopOn()}}>Loop On</button>
          <button className={styles.btn}  type="button" onClick={() => {loopOff()}}>Loop Off</button>
        </div>
        <div id="dragSample" className={styles.dragSample} onMouseDown={(event) => {dragMouseDown(event)}}> 
          <p className={styles.text}>Drag Me</p>
        </div>
      </ClientOnly>
    </Layout>
  )
}