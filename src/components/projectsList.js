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
    images: [docs, docs1],
    link: 'http://te-nextjs.vercel.app/'
  },
  {
    id: 6,
    name: 'homefinder web app',
    describe: "find and discover your next home",
    images: [home, home1],
    link: 'https://homefinder.vercel.app/'
  },
  {
    id: 2,
    name: 'React chat app',
    describe: "chat with you friend using this privet chatting site",
    images: [chat, chat1],
    link: 'https://rechat-react-app.netlify.app/'
  },
  {
    id: 3,
    name: 'DoneWithIt',
    describe: "market place to sell used stuff you dont want it any more",
    images: [DW1, DW2, DW3],
    link: 'https://expo.dev/@yas2441/DoneWithIt'
  },
  {
    id: 4,
    name: 'Github seeker',
    describe: "find github user and there repository",
    images: [GH1, GH2],
    link: 'https://expo.dev/@yas2441/github-app'
  },
  {
    id: 5,
    name: 'Gym app',
    describe: "track your workout and save it to cloud",
    images: [FT1, FT2, FT3],
    link: 'https://expo.dev/@yas2441/testTask'
  },

]

export default projects