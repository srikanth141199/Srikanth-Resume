import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact, FaCss3Alt, FaSass, FaAngular, FaVuejs, FaGithub, FaBootstrap, FaFontAwesome } from 'react-icons/fa';
import { BiLogoTypescript, BiLogoGit, BiLogoTailwindCss, BiLogoRedux } from 'react-icons/bi';
import Interactive1 from './src/assets/projectImg/Interactive2.jpg'
import AuthImg from './src/assets/projectImg/auth.jpg'
import UpdateImg from './src/assets/projectImg/Update.jpg'
import AdaptImg from './src/assets/projectImg/Adapt7.jpg'
import TeamImg from './src/assets/projectImg/Team3.jpg'

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className='h-16 w-16 text-sky-600' />,
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className='h-16 w-16 text-sky-600' />,
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className='h-16 w-16 text-sky-600' />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
];

export const projects = [
  {
    id: nanoid(),
    img: Interactive1,
    title: 'Interactive-Responsive Web Application with Angular',
    text: 'Leveraged Angular (utilizing TypeScript, HTML, and CSS) to develop an interactive and responsive   web application, showcasing proficiency in modern web development technologies.',
  },
  {
    id: nanoid(),
    img: AuthImg,
    title: 'Implemented MSAL Authentication (Microsoft ADID)',
    text: 'Successfully integrated Microsoft Authentication Library (MSAL) for secure authentication, demonstrating expertise in authentication.',
  },
  {
    id: nanoid(),
    img: UpdateImg,
    title: 'Upgraded Application to Angular v14',
    text: 'Spearheaded the seamless transition and upgrade of the application from Angular 11 to Angular 14, enhancing developer-friendliness and agility within the project.',
  },
  {
    id: nanoid(),
    img: AdaptImg,
    title: 'Adapted to Global Employee Rule Changes',
    text: 'Implemented multiple application changes in response to evolving global employee rules, showcasing flexibility and compliance with regulatory requirements.',
  },
  {
    id: nanoid(),
    img: TeamImg,
    title: 'Collaborated with Cross-Functional Teams',
    text: 'Collaborated effectively with more than 5 cross-functional teams to conceptualize, design, and execute a responsive website, fostering teamwork and project coordination. ',
  }
  // {
  //   id: nanoid(),
  //   img: 'https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800',
  //   url: 'https://react-projects.netlify.app/',
  //   github: 'https://github.com/john-smilga',
  //   title: 'third project',
  //   text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  // },
];

export const languages = [
  {
    id: nanoid(),
    title: 'JavaScript',
    icon: <FaJs className='h-16 w-16 text-sky-600' />,
  },
  {
    id: nanoid(),
    title: 'TypeScript',
    icon: <BiLogoTypescript className='h-16 w-16 text-sky-600' />,
  },
  {
    id: nanoid(),
    title: 'CSS',
    icon: <FaCss3Alt className='h-16 w-16 text-sky-600' />,
  },
  {
    id: nanoid(),
    title: 'HTML',
    icon: <FaHtml5 className='h-16 w-16 text-sky-600' />,
  },
  {
    id: nanoid(),
    title: 'Sass',
    icon: <FaSass className='h-16 w-16 text-sky-600' />,
  },
  {
    id: nanoid(),
    title: 'Git',
    icon: <BiLogoGit className='h-16 w-16 text-sky-600' />,
  }
]

export const devTools =[
  {
    id: nanoid(),
    title: 'React',
    icon : <FaReact className='h-16 w-16 text-sky-600' />,
  },
  {
    id: nanoid(),
    title: 'Redux',
    icon : <BiLogoRedux className='h-16 w-16 text-sky-600' />,
  },
  {
    id: nanoid(),
    title: 'Angular',
    icon : <FaAngular className='h-16 w-16 text-sky-600' />,
  },
  {
    id: nanoid(),
    title: 'Vue',
    icon : <FaVuejs className='h-16 w-16 text-sky-600' />,
  },
  {
    id: nanoid(),
    title: 'GitHub',
    icon : <FaGithub className='h-16 w-16 text-sky-600' />,
  },
  {
    id: nanoid(),
    title: 'BootStrap',
    icon : <FaBootstrap className='h-16 w-16 text-sky-600' />,
  },
  {
    id: nanoid(),
    title: 'FontAwesome',
    icon : <FaFontAwesome className='h-16 w-16 text-sky-600' />,
  },
  {
    id: nanoid(),
    title: 'TailWind',
    icon: <BiLogoTailwindCss className='h-16 w-16 text-sky-600' />,
  }
]