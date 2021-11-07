import Bar from "../components/Bar";
import {languages, tools} from "../data";
import {motion} from "framer-motion";
import {fadeInUp, stagger, routeAnimation} from '../animations';

const Resume = () => {
        return (
            <motion.div
                variants={routeAnimation}
                initial='initial'
                animate='animate'
                exit='exit'
                className="px-6 py-2">
                {/* //! Education & Experience */}
                <div className="grid gap-6 md:grid-cols-2">
                    <motion.div variants={fadeInUp} initial='initial' animate='animate'>
                        <h5 className="my-3 text-2xl font-bold">Education</h5>
                        <div className="">
                            <h5 className="my-2 text-xl font-bold">
                                Training Program
                            </h5>
                            <p className="font-semibold">Academy of Technology (2017-2021)</p>
                            <p className="my-3">
                                I graduated FullStack Bootcamp, located in TLV.
                                As part of the training, I built complete projects by myself with server side and client
                                side,
                                with modern and old technologies with emphasis on relevant core issues such as:
                                Cloud, Serverless, Data Binding, Data Warehouse, noSql, Data Structure and more.
                            </p>
                        </div>
                    </motion.div>
                    <div>
                        <h5 className="my-3 text-2xl font-bold">Experience</h5>
                        <div className="">
                            <h5 className="my-2 text-xl font-bold">FullStack Developer </h5>
                            <p className="font-semibold">Startup Booster</p>
                            <p className="my-3">I build websites and applications according to a customers request</p>
                        </div>
                    </div>
                </div>

                {/*Languages & Tools */}
                <div className="grid gap-9 md:grid-cols-2">
                    <div>
                        <h5 className="my-3 text-2xl font-bold">Language & Framework</h5>
                        <div className="my-2">
                            {languages.map((language, i) => (
                                <Bar value={language} key={i}/>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
                        <div className="my-2">
                            {tools.map((tool, i) => (
                                <Bar value={tool} key={i}/>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        );
    }
;


export default Resume;