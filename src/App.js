import { createRef, useState } from 'react';

// Components
import Tracks from './components/Tracks';
import tracksData from './components/tracks-data';

// Icons
import { BsFillVolumeDownFill, BsFillVolumeUpFill } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';

function App() {
  const [volume, setVolume] = useState(50);
  const [display, setDisplay] = useState('Welcome to my Drum Machine');

  const btnMap = createRef();

  // Trigger the pressed btn and set the display to the button name
  const togglePlay = (e) => {
    e.preventDefault();
    const trackObj = tracksData.filter((obj) => obj.id === e.target.id);
    e.target.children[0].volume = volume / 100;
    e.target.children[0].play();
    setDisplay(trackObj[0].id);
  };

  // Same as togglePlay() but this is triggered on keyboard press
  const handlePress = (e) => {
    e.preventDefault();
    const buttons = [...btnMap.current.childNodes].filter(
      (item) => item.className === 'drum-pad'
    );
    const button = buttons.filter(
      (btn) => parseInt(btn.attributes.keycode.value) === e.keyCode
    );
    if (button.length > 0) {
      button[0].childNodes[0].volume = volume / 100;
      button[0].childNodes[0].play();
      setDisplay(button[0].id);
    }
  };

  // Set the volume and the display when volume is changed
  const handleChange = (e) => {
    const { value } = e.target;
    setVolume(value);
    setDisplay(`Volume: ${value}`);
  };

  return (
    <div className="App">
      <div className="App" onKeyDown={handlePress} tabIndex={-1}>
        <h1>Drum Machine!</h1>

        {/* Main Drum Machine */}
        <div id="drum-machine">
          <div id="display">{display}</div>

          <div className="buttons-container" ref={btnMap}>
            <Tracks togglePlay={togglePlay} />
          </div>

          {/* Volume adjust */}
          <div className="slide-container">
            <BsFillVolumeDownFill />
            <input
              type="range"
              min="0"
              max="100"
              value={volume}
              className="slider"
              onChange={handleChange}
            />
            <BsFillVolumeUpFill />
          </div>
        </div>

        {/* Portfolio Link */}
        <div className="credits">
          <p>Designed and Coded By</p>
          <a
            href="https://github.com/pomubry"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub />
            Bryan Taduran
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
