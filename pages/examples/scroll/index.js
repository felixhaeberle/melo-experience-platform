import ClientOnly from '../../../components/ClientOnly'
import Layout from '../../../components/Layout'
import styles from './styles.module.css'

export default function Scroll() {
  if (typeof window !== "undefined"){
    // sounds and collection are example results from tool frontend
    // machine generated lines of code based on user input
    const sounds = {
      // idea: object value is created from soundfileName + 'Sound' (stringaddition)
      hoverInSound: new Audio('/examples/scroll/hoverIn.ogg'),
      clickSound: new Audio('/examples/scroll/click.mp3'),
      nearbySound: new Audio('/examples/scroll/nearby.wav'),
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
    <Layout>
      <ClientOnly>
        <div id={styles.wrapper}>
          <div data-sound="name01">
              <a className={styles.buttonContent} href="#"><span>Hover in</span>In</a>
          </div>
          <div data-sound="name02">
              <a className={styles.buttonContent} href="#"><span>Hover out</span></a>
          </div>
          <div data-sound="name03">
              <a className={styles.buttonContent} href="#"><span>Click</span></a>
          </div>
          <div data-sound="name04">
              <a className={styles.buttonContent} href="#"><span>Nearby</span></a>
          </div>
        </div>
      </ClientOnly>
    </Layout>
  )
}