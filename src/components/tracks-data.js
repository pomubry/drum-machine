import Heater1 from '../audio/Heater-1.mp3';
import Heater2 from '../audio/Heater-2.mp3';
import Heater3 from '../audio/Heater-3.mp3';
import Heater4 from '../audio/Heater-4.mp3';
import Heater6 from '../audio/Heater-6.mp3';
import OpenHH from '../audio/Open-HH.mp3';
import Kick_n_Hat from '../audio/Kick_n_Hat.mp3';
import Kick from '../audio/Kick.mp3';
import ClosedHH from '../audio/Closed-HH.mp3';

const tracks = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: Heater1,
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: Heater2,
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: Heater3,
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: Heater4,
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: Heater6,
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: OpenHH,
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: Kick_n_Hat,
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: Kick,
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: ClosedHH,
  },
];

export default tracks;
