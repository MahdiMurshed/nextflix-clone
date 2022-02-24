import React from "react";
import Card from "./Card";

const SectionCard = ({ title, videos, size }) => {
  return (
    <section className="bg-[color:var(--black50)] px-4 w-full">
      <h2 className="text-[color:var(--white10)] text-3xl font-bold">
        {title}
      </h2>
      <div className="flex py-7 mt-6 overflow-x-scroll overflow-y-hidden ">
        {videos.map((video, index) => (
          <Card key={index} imgUrl={video.imgUrl} size={size} />
        ))}
      </div>
    </section>
  );
};

export default SectionCard;
