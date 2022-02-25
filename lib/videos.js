export const getCommonVideos = async (url) => {
  try {
    const baseUrl = "https://youtube.googleapis.com/youtube/v3";
    const res = await fetch(`${baseUrl}/${url}&key=${process.env.YT_API_KEY}`);
    const data = await res.json();

    if (data.error) {
      console.log(data.error.message);
    }
    const vids = data.items.map((item) => {
      const snippet = item.snippet;
      return {
        imgUrl: snippet.thumbnails.high.url,
        title: snippet.title,
        id: item.id?.videoId || item.id,
        description: snippet.description,
        publishTime: snippet.publishedAt,
        channelTitle: snippet.channelTitle,
        statistics: item.statistics ? item.statistics : { viewCount: 0 },
      };
    });
    return vids;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getVideos = async (searchQ) => {
  const url = `search?part=snippet&maxResults=25&q=${searchQ}`;
  return getCommonVideos(url);
};
export const getPopularVideos = async () => {
  const url = `videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=25&regionCode=US`;

  return getCommonVideos(url);
};
export const getYoutubeVideoById = (videoId) => {
  const URL = `videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}`;

  return getCommonVideos(URL);
};
