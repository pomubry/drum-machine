import React, { Component } from 'react';
import tracks from './tracks';
import github from './githubIcon.svg';

export class App extends Component {
  state = {
    volume: 50,
    display: 'Welcome to my Drum Machine',
  };

  btnMap = React.createRef();

  togglePlay = (e) => {
    e.preventDefault();
    const trackObj = tracks.filter((obj) => obj.id === e.target.id);
    e.target.children[0].volume = this.state.volume / 100;
    e.target.children[0].play();
    this.setState({
      display: trackObj[0].id,
    });
  };

  handlePress = (e) => {
    e.preventDefault();
    const buttons = [...this.btnMap.current.childNodes].filter(
      (item) => item.className === 'drum-pad'
    );
    const button = buttons.filter(
      (btn) => parseInt(btn.attributes.keycode.value) === e.keyCode
    );
    if (button.length > 0) {
      button[0].childNodes[0].volume = this.state.volume / 100;
      button[0].childNodes[0].play();
      this.setState({ display: button[0].id });
    }
  };

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ volume: value, display: `Volume: ${value}` });
  };

  render() {
    const buttons = tracks.map((obj) => {
      return (
        <button
          className="drum-pad"
          id={obj.id}
          onClick={this.togglePlay}
          keycode={obj.keyCode}
          key={obj.id}
        >
          <audio
            className="clip"
            id={obj.keyTrigger}
            preload="auto"
            src={obj.url}
          ></audio>
          {obj.keyTrigger}
        </button>
      );
    });
    return (
      <div className="App" onKeyDown={this.handlePress} tabIndex={-1}>
        <h1>Drum Machine!</h1>
        <div id="drum-machine">
          <div id="display">{this.state.display}</div>
          <div className="buttons-container" ref={this.btnMap}>
            {buttons}
          </div>
          <div className="slide-container">
            <span className="material-icons">volume_down</span>
            <input
              type="range"
              min="0"
              max="100"
              value={this.state.volume}
              className="slider"
              onChange={this.handleChange}
            ></input>
            <span className="material-icons">volume_up</span>
            <br />
          </div>
        </div>
        <div className="credits">
          <p>Designed and Coded By</p>
          <a
            href="https://github.com/pomubry"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="github icon" />
            Bryan Taduran
          </a>
        </div>
      </div>
    );
  }
}

export default App;
