import React from "react";
import { useRouter } from "next/router";
import Modal from "react-modal";
import styles from "styles/Video.module.css";
import { getYoutubeVideoById } from "lib/videos";
import clsx from "classnames";
Modal.setAppElement("#__next");
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const Video = ({ vid }) => {
  const router = useRouter();
  console.log(router.query);
  const { videoId } = router.query;
  const {
    title,
    publishTime,
    description,
    channelTitle,
    statistics: { viewCount } = { viewCount: 0 },
  } = vid;
  console.log(videoId);
  return (
    <div className={styles.container}>
      <Modal
        isOpen={true}
        onRequestClose={() => {
          router.back();
        }}
        contentLabel="Video Modal"
        overlayClassName={styles.overlay}
        className={styles.modal}
        // style={customStyles}
      >
        <iframe
          id="ytplayer"
          className={styles.videoPlayer}
          type="text/html"
          width="100%"
          height="360"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=0&origin=http://example.com&controls=0&rel=1`}
          frameBorder="0"
        ></iframe>
        <div className={styles.modalBody}>
          <div className={styles.modalBodyContent}>
            <div className={styles.col1}>
              <p className={styles.publishTime}>{publishTime}</p>
              <p className={styles.title}>{title}</p>
              <p className={styles.description}>{description}</p>
            </div>
            <div className={styles.col2}>
              <p className={clsx(styles.subText, styles.subTextWrapper)}>
                <span className={styles.textColor}>Cast: </span>
                <span className={styles.channelTitle}>{channelTitle}</span>
              </p>
              <p className={clsx(styles.subText, styles.subTextWrapper)}>
                <span className={styles.textColor}>View Count: </span>
                <span className={styles.channelTitle}>{viewCount}</span>
              </p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Video;

export async function getStaticPaths() {
  const listOfVideos = ["mYfJxlgR2jw", "4zH5iYM4wJo", "KCPEHsAViiQ"];
  const paths = listOfVideos.map((videoId) => ({
    params: { videoId },
  }));
  return {
    paths,
    fallback: "blocking",
  };
}
export async function getStaticProps({ params }) {
  const videoId = params.videoId;
  const vids = await getYoutubeVideoById(videoId);

  return {
    props: {
      vid: vids[0],
    },
    revalidate: 10,
  };
}
