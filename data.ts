import {RiComputerLine} from "react-icons/ri";
import {FaServer} from "react-icons/fa";
import {AiOutlineAntDesign, AiOutlineApi} from "react-icons/ai";
import {MdDeveloperMode} from "react-icons/md";
import {Service, Skill, IProject} from "./type";

import {BsCircleFill} from "react-icons/bs";

export const services: Service[] = [
    {
        Icon: RiComputerLine,
        title: "Frontend Development",
        about:
            "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ",
    },
    {
        Icon: FaServer,
        title: "Backend  Development",
        about:
            "handle database, server, api using <b>Express </b> & other popular frameworks",
    },
    {
        Icon: AiOutlineApi,
        title: "API Development",
        about:
            "I can develop robust  REST API using <b>django-rest-api</b>  & <b>Node API</b> ",
    },
    {
        Icon: MdDeveloperMode,
        title: "Competitive Coder",
        about: "a daily problem solver in <b>HackerRank</b>  and <b>Leet Code</b> ",
    },
    {
        Icon: AiOutlineAntDesign,
        title: "UI/UX designer",
        about:
            "stunning user interface designer using <b>Figma</b>  and  <b>Framer</b> ",
    },
    {
        Icon: RiComputerLine,
        title: "Whatever",
        about:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!",
    },
];

export const languages: Skill[] = [
    {
        Icon: BsCircleFill,
        name: "Python",
        level: "45",
    },
    {
        Icon: BsCircleFill,
        name: "Java Script",
        level: "85",
    },
    {
        Icon: BsCircleFill,
        name: "React Native",
        level: "80",
    },
    {
        Icon: BsCircleFill,
        name: "React",
        level: "85",
    },
    {
        Icon: BsCircleFill,
        name: "vue",
        level: "85",
    },
    {
        Icon: BsCircleFill,
        name: "Bootstrap",
        level: "80",
    },
];

export const tools: Skill[] = [
    {
        Icon: BsCircleFill,
        name: "Figma",
        level: "85",
    },
    {
        Icon: BsCircleFill,
        name: "Photoshop",
        level: "45",
    },
    {
        Icon: BsCircleFill,
        name: "Illustrator",
        level: "60",
    },
    {
        Icon: BsCircleFill,
        name: "Framer",
        level: "45",
    },
];

export const projects: IProject[] = [
    {
        id: 1,
        name: "Weather App",
        description:
            "Weather App built with Next.js and React. Built as part of a Next.js course.",
        image_path: "/images/weatherApp.png",
        deployed_url: "https://meital-next-weather-app-bf2b06ryu-meitalcohen1.vercel.app/",
        github_url: "https://github.com/MeitalCohen1/next-weather-app",
        category: ["react"],
        key_techs: ["React", "api", 'next.js, moment-timezone'],
    },
    {
        id: 2,
        name: "Hulu Movie",
        image_path: "/images/hulu.png",
        deployed_url: "https://meital-hulu.vercel.app/",
        github_url: "https://github.com/MeitalCohen1/Hulu",
        category: ["react"],
        description:
            "Hulu Movies built with Next.js, React and Tailwind. Built as part of a React course.",
        key_techs: ["React", "api", "tailwind-css", 'next.js'],
    },

    {
        id: 3,
        name: "DJ-Events-Frontend ",
        image_path: "/images/dj.png",
        deployed_url: "https://meital-dj-events-frontend.vercel.app/",
        github_url: "https://github.com/MeitalCohen1/DJ-Events-Frontend",
        category: ["node", "next.js", "react"],
        description:
            "Next.js website to list DJ and other musical events.",
        key_techs: [
            "strapi", "next.js"],
    },
];
