import React from "react"
import { motion } from "../../../node_modules/framer-motion/dist/framer-motion" // Or import { motion } from "framer-motion";
import Link from "next/link" // Link component is imported but not used in this snippet. Remove if not needed elsewhere.
import { useRouter } from "next/router" // useRouter is imported but not used. Remove if not needed.

interface MyNameProps {
  finishedLoading: boolean
}

const MyName: React.FC<MyNameProps> = (props) => {
  // const router = useRouter(); // Not used currently

  return (
    <div
      className="h-full flex flex-col justify-center relative
      px-8 2xl:px-72 xl:px-56 lg:px-32 md:px-28 sm:px-8 py-32 sm:py-52 bg-gradient-to-b from-animeBg-dark to-animeBg-light"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-full h-full bg-gradient-anime opacity-10 animate-shine"
          style={{ backgroundSize: "200% 200%" }}
        ></div>
      </div>
      <motion.span
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: {
            delay: props.finishedLoading ? 0 : 10.4,
            duration: props.finishedLoading ? 0 : 0.2,
          },
          y: {
            delay: props.finishedLoading ? 0 : 10.4,
            duration: props.finishedLoading ? 0 : 0.2,
          },
        }}
        className="text-animeAccent font-anime text-xl relative z-10 anime-glow"
      >
        こんにちは、私の名前は
      </motion.span>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: {
            delay: props.finishedLoading ? 0 : 10.5,
            duration: props.finishedLoading ? 0 : 0.2,
          },
          y: {
            delay: props.finishedLoading ? 0 : 10.5,
            duration: props.finishedLoading ? 0 : 0.2,
          },
        }}
        className="relative z-10 font-anime font-bold text-4xl lg:text-8xl sm:text-6xl md:text-7xl mt-4 anime-text-gradient"
      >
        Haydar Wildan Zacky.
      </motion.h1>
      <motion.h2
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: {
            delay: props.finishedLoading ? 0 : 10.6,
            duration: props.finishedLoading ? 0 : 0.2,
          },
          y: {
            delay: props.finishedLoading ? 0 : 10.6,
            duration: props.finishedLoading ? 0 : 0.2,
          },
        }}
        className="relative z-10 font-anime text-3xl lg:text-6xl sm:text-4xl md:text-5xl mt-4 text-animeSecondary anime-float"
      >
        I Turn Fantasy Into Reality.
      </motion.h2>

      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: {
            delay: props.finishedLoading ? 0 : 10.7,
            duration: props.finishedLoading ? 0 : 0.2,
          },
          y: {
            delay: props.finishedLoading ? 0 : 10.7,
            duration: props.finishedLoading ? 0 : 0.2,
          },
        }}
        className="relative z-10 text-animeText font-Text2 text-sm md:text-lg sm:text-md mt-10 tracking-wider leading-relaxed"
      >
        I&apos;m a{" "}
        <span className="text-AAsecondary keyword-hover">
          {" "}
          Full Stack Software Engineer
        </span>{" "}
        with strong{" "}
        <span className="text-AAsecondary keyword-hover">
          problem-solving skills
        </span>
        , specializing in creating exceptional digital experiences and Reverse
        Engginering.
        <br className="3xl:block hidden" /> With expertise in both{" "}
        <span className="text-AAsecondary keyword-hover">front-end</span> and{" "}
        <span className="text-AAsecondary keyword-hover">
          back-end development
        </span>
        , I work with a diverse range of technologies, including{" "}
        <span className="text-AAsecondary keyword-hover">web3, </span>
        <br className="3xl:block hidden" /> and traditional web applications. I
        enjoy solving challenging projects that drive{" "}
        <span className="text-AAsecondary keyword-hover">innovation</span> and
        deliver high-quality and fast results.
        <br className="3xl:block hidden" /> My experience in{" "}
        <span className="text-AAsecondary keyword-hover">
          leading development teams
        </span>{" "}
        has honed my ability to collaborate effectively and translate ideas into
        functional solutions.
        <br className="3xl:block hidden" /> I actively seek dynamic projects
        where I can contribute to pushing the boundaries of technology and drive
        impactful{" "}
        <span className="text-AAsecondary keyword-hover">innovation</span>.
      </motion.h3>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: {
            delay: props.finishedLoading ? 0 : 10.8,
            duration: props.finishedLoading ? 0 : 0.2,
          },
          y: {
            delay: props.finishedLoading ? 0 : 10.8,
            duration: props.finishedLoading ? 0 : 0.2,
          },
        }}
        className="mt-12"
      >
        <a href={"/resume.pdf"} target={"_blank"} rel="noreferrer">
          <button className="btn-anime font-anime text-lg relative z-10">
            Resume !!
          </button>
        </a>
      </motion.div>

      {/* Optional Scroll Down Indicator Placeholder */}
      {/* You would implement this with its own motion.div and styling/icon if this hero is full viewport height */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: props.finishedLoading ? 0 : 11, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-AAsecondary"
        // style={{ bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)' }} // Alternative to Tailwind classes
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 animate-bounce">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
        </svg>
      </motion.div> */}
    </div>
  )
}

export default MyName
