import styles from '../../../styles/mouse.module.css'
import { useState } from 'react'

export default function Scroll() {
  let [experience, experienceStarted] = useState(false);

  const startSound = () => {
    // sounds and collection are example results from tool frontend
    // machine generated lines of code based on user input
    const sounds = {
      // idea: object value is created from soundfileName + 'Sound' (stringaddition)
      hoverInSound: new Audio('/examples/mouse/hoverIn.ogg'),
      clickSound: new Audio('/examples/mouse/click.mp3'),
      nearbySound: new Audio('/examples/mouse/nearby.wav'),
    }

    const collection = {
      // in the frontend you create a component with a specific name
      // you select the type of behaviour you want with settings (missing here) and the soundfile
      // in the value field the name of the soundfile is saved + 'Sound' (stringaddition)
      // the specific is then set as data-sound value in the dom
      name01: {behaviour: 'hoverIn', sound: 'hoverInSound'},
      name02: {behaviour: 'hoverOut', sound: 'hoverInSound'},
      name03: {behaviour: 'click', sound: 'clickSound'},
      name04: {behaviour: 'nearby', sound: 'nearbySound'},
    }

    // System Logic
    // ------------------------------------------------------------------------------------------

    // List of all needed Soundinteractions
    const bindSoundBehavtoElem = {
      hoverIn: function (elem, sound) {setHoverIn(elem, sound)},
      hoverOut: function (elem, sound) {setHoverOut(elem, sound)},
      click: function (elem, sound) {setClick(elem, sound)},
      nearby: function (elem, sound) {setNearby(elem, sound)}
    }

    // Select all elements who have the data-sound attribute
    const soundElems = document.querySelectorAll('[data-sound]');
    // bind event with sound to specific element
    for (let i = 0; i < soundElems.length; i++) {
      // get string in data-sound Attribute
      const soundComponents = soundElems[i].dataset.sound;

      // get elem with data-sound Attribute
      const elem = soundElems[i];
      
      // get User created Behaviour and Soundfile for specific names
      const componentBehaviour = collection[soundComponents].behaviour;
      const componentSound = collection[soundComponents].sound;

      // binds sound and behaviour to element with matching name from collection
      bindSoundBehavtoElem[componentBehaviour](elem, componentSound);
    }

    // BEHAVIOUR FUNCTIONS
    // -----------------------------------------------------------------------------------

    function setHoverIn(elem, sound) {
      elem.onmouseenter = function() {
          sounds[sound].play();
      }
    }

    function setHoverOut(elem, sound) {
      elem.onmouseleave = function() {
          sounds[sound].play();
      }
    }

    function setClick(elem, sound) {
      elem.onclick = function() {
          sounds[sound].play();
      }
    }

    function setNearby(elem, sound) {
      // distance to center of elem when sound starts
      let setDistance = 180;
      let elemCenter = getCenterOfElement(elem);

      document.onmousemove = function(e) {
          // get mouse position
          let mX = window.event.clientX;
          let mY = window.event.clientY;
          let mouseCoords = {x: mX, y: mY}

          // calulcate Distance from elem to mouse
          let distance = calculateDistance(mouseCoords, elemCenter);

          // map distance to soundvolume
          let volume = map(distance, 0, setDistance, 1, 0);

          if (distance < setDistance) {
              // play sound when in set distance
              sounds[sound].play();
              sounds[sound].loop = true;
              sounds[sound].volume = volume;
          } else {
              // pause sound when out of distance
              sounds[sound].pause();
          }
      }
    }


    // MATH FUNCTIONS
    // ----------------------------------------------------------------------

    function getCenterOfElement(element) {
      let bBox = element.getBoundingClientRect();
      let xBox = bBox.x;
      let yBox = bBox.y;
      let width = bBox.width;
      let height = bBox.height;

      let x = xBox + width/2;
      let y = yBox + height/2;
      let coordinates = {x, y};
      return coordinates;
    }

    function calculateDistance(coordinates1, coordinates2) {
      let h = coordinates1.x - coordinates2.x;
      let v = coordinates1.y - coordinates2.y;
      let result = Math.sqrt(h*h + v*v);
      return result;
    }

    function map(val, low1, high1, low2, high2) {
      return (val - low1) / (high1 - low1) * (high2 - low2) + low2;
    }
  }

  return ( 
    <div id={styles.wrapper}>
      <div className={styles.buttonContentRed} onClick={() => {startSound(); experienceStarted(true);}}>{experience ? 'Experience started' : 'Click to start experience'}</div>
      <div data-sound="name01">
        <span className={styles.buttonContent}><span>Hover in</span></span>
      </div>
      <div data-sound="name02">
        <span className={styles.buttonContent}><span>Hover out</span></span>
      </div>
      <div data-sound="name03">
        <span className={styles.buttonContent}><span>Click</span></span>
      </div>
      <div data-sound="name04">
        <span className={styles.buttonContent}><span>Nearby</span></span>
      </div>
    </div>
  )
}