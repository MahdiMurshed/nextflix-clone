import Image from "next/image";
import React from "react";
import { fallBackImgUrl } from "../const";
import { motion } from "framer-motion";

const Card = ({ imgUrl = fallBackImgUrl, size = "md" }) => {
  return (
    <div className="m-2 cursor-pointer">
      <motion.div
        className={`relative ${
          size === "sm"
            ? "w-[300px] h-[170px]"
            : size === "md"
            ? "w-[158px] h-[280px]"
            : "w-[218px] h-[434px]"
        } hover:z-99 relative inline-block`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Image
          className="border rounded-md object-cover block max-w-full object-center"
          src={imgUrl}
          alt="Card"
          layout="fill"
        />
      </motion.div>
    </div>
  );
};

export default Card;
