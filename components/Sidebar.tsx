import {AiFillGithub, AiFillLinkedin, AiFillFacebook} from "react-icons/ai";
import {GiTie} from "react-icons/gi";
import {GoLocation} from "react-icons/go";
import {useTheme} from "next-themes";
import Image from "next/image";

const Sidebar = () => {
    const {theme, setTheme} = useTheme();

    const changeTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <>
            <Image
                src='/images/me.png'
                alt="avatar"
                className=" mx-auto border rounded-full "
                height="128px"
                width="128px"
                layout="intrinsic"
                quality="100"
            />
            <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
                <span className='text-purple-500'>Meital </span>
                Cohen
            </h3>
            <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-black-500">
                Web Developer
            </p>
            <a
                href="images/resume.jpg"
                download="Meital Cohen Resume.jpg"
                className="flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full cursor-pointer dark:bg-dark-200 dark:bg-black-500"
            >
                <GiTie className="w-6 h-6"/>
                <span>Download Resume</span>
            </a>
            <div className="flex justify-around w-9/12 mx-auto my-5 text-purple-500 md:w-full ">
                <a href="https://www.facebook.com/meital.cohen.79">
                    <AiFillFacebook className="w-8 h-8 cursor-pointer"/>
                </a>
                <a href="https://www.linkedin.com/in/meital-cohen/">
                    <AiFillLinkedin className="w-8 h-8 cursor-pointer"/>
                </a>
                <a href="https://github.com/MeitalCohen1">
                    <AiFillGithub className="w-8 h-8 cursor-pointer"/>{" "}
                </a>
            </div>

            <div
                className="py-4 my-5 bg-gray-200 dark:bg-dark-200 dark:bg-black-500"
                style={{marginLeft: "-1rem", marginRight: "-1rem"}}
            >
                <div className='flex justify-center items-center space-x-2'>
                    <GoLocation/>
                    <span>Herzlia, Israel</span>
                </div>
                <p className='my-2'>Meitalc828@gmail.com</p>
                <p className='my-2'>050-9816598</p>
            </div>
            <button
                className="w-8/12 px-5 py-2 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:scale-105 focus:outline-none"
                onClick={() => window.open("mailto:meitalc828@gmail.com")}
            >
                Email me
            </button>
            <button
                onClick={changeTheme}
                className="w-8/12 px-5 py-2 my-4 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 focus:outline-none hover:scale-105 "
            >
                Toggle Theme
            </button>
        </>
    )
}

export default Sidebar;