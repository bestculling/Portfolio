import React from "react";
import profilepic from "../assets/profpic.png";
import { TypeAnimation } from "react-type-animation";
import ShinyEffect from "./ShinyEffect";
import {
    AiOutlineGithub,
    AiOutlineMedium,
    AiOutlineLinkedin,
} from "react-icons/ai";
import {
    DiCss3,
    DiHtml5,
    DiJavascript1,
    DiNodejsSmall,
    DiReact,
} from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { motion } from "framer-motion";


const Hero = () => {
    return (
        <div className="mt-24 max-w-[1200px] mx-auto relative">
            <div className="grid md:grid-cols-2 place-items-center gap-8">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <TypeAnimation
                        sequence={[
                            "Blockchain",
                            1000,
                            "Web3.0",
                            1000,
                            "AI",
                            1000
                        ]}
                        speed={50}
                        repeat={Infinity}
                        className="font-bold text-gray-400 text-xl md:text-5xl italic- mb-4"
                    />

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="text-gray-200 md:text-7xl text-5xl tracking-tight mb-4"
                    >
                        HEY, I AM <br />
                        <span className="text-purple-500">ARM</span>
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 1 }}
                        className="text-gray-300 max-w-[300px] md:max-w-[500px] md:text-2xl text-lg mb-6"
                    >
                        I am passionate about building a decentralized future with crypto, blockchain, and Web3, and believe AI will be key to its development and adoption.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 1.5 }}
                        className="flex flex-row items-center gap-6 my-4 md:mb-0"
                    >

                        <div className="flex gap-6 flex-row text-4xl md:text-6xl text-purple-400 z-20">
                            <motion.a
                                whileHover={{ scale: 1.2 }}
                                href="https://github.com/bestculling"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <AiOutlineGithub />
                            </motion.a>

                            <motion.a
                                whileHover={{ scale: 1.2 }}
                                href="https://www.linkedin.com/in/akkrapolkanpong/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <AiOutlineLinkedin />
                            </motion.a>

                            <motion.a
                                whileHover={{ scale: 1.2 }}
                                href="https://medium.com/@aukkrapolarm"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <AiOutlineMedium />
                            </motion.a>
                        </div>
                    </motion.div>
                </motion.div>


                <motion.img
                    src={profilepic}
                    className="w-[300px] md:w-[450px]"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                />
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 2 }}
                className="flex flex-row text-7xl px-12 md:px-0 w-full justify-center items-center py-24"
            >
                <p className="text-gray-200 mr-6">My Tech Stack</p>
                <DiHtml5 className="text-orange-600 mx-2" />
                <DiCss3 className="text-blue-600 mx-2" />
                <DiJavascript1 className="text-yellow-500 mx-2" />
                <SiTypescript className="text-blue-500 mx-2" />
                <DiReact className="text-blue-500 mx-2" />
                <DiNodejsSmall className="text-green-500 mx-2" />
                <RiNextjsFill className="mx-2" />

            </motion.div>

            <div className="absolute inset-0 hidden md:block">
                <ShinyEffect left={0} top={0} size={1400} />
            </div>

        </div>
    )
}

export default Hero