import Image from "next/image";
import { motion } from "framer-motion";

const Banner = ({ title, subTitle, imgUrl }) => {
  const handlePlay = (e) => {
    console.log(e);
  };
  return (
    <div className=" w-full h-[80vh] relative">
      <div className="w-full h-full z-10 absolute ">
        <div className="flex flex-start px-16 h-full flex-col mt-24 ">
          <div className="flex">
            <p className="text-6xl text-[color:var(--red)] font-extrabold">N</p>
            <p className="text-sm text-[color:var(--gray20)] self-center tracking-widest">
              S E R I E S
            </p>
          </div>
          <h3 className="text-3xl font-extrabold text-[color:var(--white10)] ">
            {title}
          </h3>
          <h4 className="text-lg text-[color:var(--white10)]">{subTitle}</h4>
          <div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-white flex items-center justify-center px-5 mt-5 bg-[color:var(--white10)] w-32 rounded-lg py-2 "
              onClick={handlePlay}
            >
              <Image
                src="/static/play_arrow.svg"
                alt="arrow"
                height="32px"
                width="32px"
              />
              <span className="text-[color:rgb(31,41,55)] font-semibold text-lg pl-1 text-center">
                Play
              </span>
            </motion.button>
          </div>
        </div>
      </div>
      <div
        className="absolute w-full h-full bottom-0 bg-cover  bg-center "
        style={{
          backgroundImage: `linear-gradient(to top right, rgba(228,221,221,0.2) 10%, rgba(0,0,0,0.3) 95%), url(${imgUrl})`,
        }}
      ></div>
    </div>
  );
};

export default Banner;
