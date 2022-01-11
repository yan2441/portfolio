import docs from '../assets/mockup/docs.png';
import docs1 from '../assets/mockup/docs1.png';
import chat from '../assets/mockup/chat.png';
import chat1 from '../assets/mockup/chat1.png';
import home from '../assets/mockup/home.png';
import home1 from '../assets/mockup/home1.png';
import DW1 from '../assets/mockup/DW1.png';
import DW2 from '../assets/mockup/DW2.png';
import DW3 from '../assets/mockup/DW3.png';
import FT1 from '../assets/mockup/FT1.png';
import FT2 from '../assets/mockup/FT2.png';
import FT3 from '../assets/mockup/FT3.png';
import GH1 from '../assets/mockup/GH1.png';
import GH2 from '../assets/mockup/GH2.png';

const projects = [
  {
    id: 1,
    name: 'Text editor (Google doc clone)',
    describe: "create and edit you document and save on cloud with firebase",
    images: [
      { url: docs },
      { url: docs1 },
    ],
  },
  {
    id: 2,
    name: 'React chat app',
    describe: "chat with you friend using this privet chatting site",
    images: [
      { url: chat },
      { url: chat1 },
    ],
  },
  {
    id: 6,
    name: 'homefinder web app',
    describe: "find and discover your next home",
    images: [
      { url: home },
      { url: home1 },
    ],
  },
  {
    id: 3,
    name: 'DoneWithIt',
    describe: "market place to sell used stuff you dont want it any more",
    images: [
      { url: DW1 },
      { url: DW2 },
      { url: DW3 },
    ],
  },
  {
    id: 4,
    name: 'Github seeker',
    describe: "find github user and there repository",
    images: [
      { url: GH1 },
      { url: GH2 },
    ],
  },
  {
    id: 5,
    name: 'Gym app',
    describe: "track your workout and save it to cloud",
    images: [
      { url: FT1 },
      { url: FT2 },
      { url: FT3 },
    ],
  },

]

export default projects