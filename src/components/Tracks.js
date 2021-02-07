import tracksData from './tracks-data';

const Tracks = ({ togglePlay }) => {
  return (
    <>
      {tracksData.map((obj) => {
        return (
          <button
            className="drum-pad"
            id={obj.id}
            onClick={togglePlay}
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
      })}
    </>
  );
};

export default Tracks;
