import {GetServerSidePropsContext, GetStaticPropsContext} from "next";
import {services} from "../data";
import ServiceCard from "../components/ServiceCard";
import {motion} from 'framer-motion'
import {stagger, fadeInUp, routeAnimation} from "../animations";


const About = ({endpoint}) => {

    return (
        <motion.div
            variants={routeAnimation}
            initial='initial'
            animate='animate'
            exit='exit'
            className='flex flex-col px-6 pt-1 flex-grow '>
            <h6 className="my-3 text-base font-medium">
                I am a Fullstack Developer who loves to code all day long.
                For me, it is not just about programming, I see it as a whole rich world in itself.
                I really like to study, research and I emphasize personal development.

                Technical Experience: HTML5 | CSS3 | Javascript | Git | Linux | Vue.js | Vuex | Sass | Node.js |
                ExpressJS | noSQL | Firebase Realtime Database | Firestore | Cloud Functions| rules
            </h6>
            <div
                className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100 "
                style={{marginLeft: "-1.5rem", marginRight: "-1.5rem"}}
            >
                <h4 className='my-3 text-xl font-bold tracking-wide'>What I Offer</h4>
                <motion.div className="grid gap-6 my-3 md:grid-cols-2"
                            variants={stagger}
                            initial='initial'
                            animate='animate'
                >
                    {services.map(service => (
                        <motion.div
                            variants={fadeInUp}
                            className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1"
                            key={service.title}>
                            <ServiceCard service={service}/>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    )
}

export default About;

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    // const res = await fetch(`${process.env.VERCEL_URL} / api / services'`)
    // const data = await res.json()
    // console.log(data)
    return {
        props: {
            endpoint: process.env.VERCEL_URL
        }
    }
}

// export const getStaticProps = async (context: GetStaticPropsContext) => {
//     const res = await fetch('http://localhost:3000/api/services')
//     const data = await res.json()
//     console.log(services)
//     return {
//         props: {
//             services: data.services
//         }
//     }
// }