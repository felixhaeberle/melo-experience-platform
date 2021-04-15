import styles from '../../../styles/scroll.module.css'

export default function Scroll() {
    let lastKnownScrollPosition = 0;
    let ticking = false;  
    // sounds and collection are example results from tool frontend
    // machine generated lines of code based on user input
    const sounds = {
        // idea: object value is created from soundfileName + 'Sound' (stringaddition)
        section1sound: new Audio('/examples/scroll/326016__vincepest11__ambiance-food-market.wav'),
        section2sound: new Audio('/examples/scroll/345851__hargissssound__spring-birds-raw-new-jersey.wav'),
        section3sound: new Audio('/examples/scroll/98491__tec-studio__walking1-gravel.wav')
    }

    const collection = {
        // in the frontend you create a component with a specific name
        // you select the type of behaviour you want with settings (missing here) and the soundfile
        // in the value field the name of the soundfile is saved + 'Sound' (stringaddition)
        // the specific is then set as data-sound value in the dom
        name05: {behaviour: 'scrollOver', sound: 'section1sound'},
        name06: {behaviour: 'scrollOver', sound: 'section2sound'},
        name07: {behaviour: 'scrollOver', sound: 'section3sound'}
    }

    // Event Listener
    // ------------------------------------------------------------------------------------------

    document.addEventListener('scroll', function(e) {
        lastKnownScrollPosition = window.scrollY;
      
        if (!ticking) {
          window.requestAnimationFrame(function() {
            onScroll(lastKnownScrollPosition);
            ticking = false;
          });
      
          ticking = true;
        }
    });
    
    // Triggered Functions
    // ------------------------------------------------------------------------------------------

    function onScroll(posY){
        const soundElems = getAllElementsWithAttribute('data-sounds');
        for (let i = 0; i < soundElems.length; i++) {
            let sound = sounds[collection[soundElems[i].dataset.sounds].sound];
            if(checkVisibillity(soundElems[i])){
                if(sound.paused == 1){
                    sound.play();
                }
                handleElemInView(soundElems[i], sound);
            }else{
                if(sound.paused == 0){
                    sound.pause();
                    sound.currentTime = 0;
                }
            }
        }
    }

    function handleElemInView(elem, sound){
        var behaviour = collection[elem.dataset.sounds].behaviour;
        switch (behaviour){
            case 'scrollOver':
                scrollOver(elem,sound);
                break;
            default:
                console.log('unkown behaviour');
        }
    }

    function scrollOver(bindingElem,sound){
        let centerPoint = {x: window.innerWidth/2, y: window.innerHeight/2};
        let dist = calculateDistance(getCenterOfElement(bindingElem), centerPoint);
        let vol; 
        if (dist > window.innerHeight) {
            vol = 0;
        } else {
            vol = mapRange(dist, 0, window.innerHeight, 1, 0);
        }
        sound.volume = vol;
        console.log(vol);
    }

    

    // MATH FUNCTIONS
    // ----------------------------------------------------------------------

    function checkVisibillity(el) {
        //checks if any part of an element is visible in the viewport
        var top = el.offsetTop;
        var left = el.offsetLeft;
        var width = el.offsetWidth;
        var height = el.offsetHeight;

        while(el.offsetParent) {
        el = el.offsetParent;
        top += el.offsetTop;
        left += el.offsetLeft;
        }

        return (
        top < (window.pageYOffset + window.innerHeight) &&
        left < (window.pageXOffset + window.innerWidth) &&
        (top + height) > window.pageYOffset &&
        (left + width) > window.pageXOffset
        );
    }

    function getAllElementsWithAttribute(attribute){
        var matchingElements = [];
        var allElements = document.getElementsByTagName('*');
        for (var i = 0, n = allElements.length; i < n; i++)
        {
        if (allElements[i].getAttribute(attribute) !== null)
        {
            // Element exists with attribute. Add to array.
            matchingElements.push(allElements[i]);
        }
        }
        return matchingElements;
    }

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

    function mapRange (value, a, b, c, d) {
        // first map value from (a..b) to (0..1)
        value = (value - a) / (b - a);
        // then map it from (0..1) to (c..d) and return it
        return c + value * (d - c);
    }

    function calculateDistance(coordinates1, coordinates2) {
        let h = coordinates1.x - coordinates2.x;
        let v = coordinates1.y - coordinates2.y;
        let result = Math.sqrt(h*h + v*v);
        return result;
    }

    function soundOn(event){
        console.log(event);
    }

    function soundOff(event){
        console.log(event);
    }
    
    return ( 
        <div id={styles.wrapper}>
            <div className={styles.button}>
                <a className={styles.buttonContent} href="#" onClick={(event) => {soundOn(event)}} >Sound On</a>
                <a className={styles.buttonContent} href="#" onClick={(event) => {soundOff(event)}} >Sound Off</a>
            </div>
            <div className={styles.section} data-sounds="name05">
                moin
            </div>
            <div className={styles.section} data-sounds="name06">
            </div>
            <div className={styles.section} data-sounds="name07">
            </div>
        </div>
    )
}