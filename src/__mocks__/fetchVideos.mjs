const videos = {
  data: {
    items: [
      {
        title: "How to prepare a great beer",
        type: "video",
        source: "facebook",
        videoId: "1052114818157758",
        views: 4569654,
      },
      {
        title: "Video2",
        type: "video",
        source: "youtube",
        videoId: "1152114818157758",
        views: 34213,
      },
      {
        title: "Video3",
        type: "video",
        source: "url",
        url: "http://g.com/1.mp4",
        views: 3421,
      },
    ],
  },
};

const fetchVideos = async () => videos;

export default fetchVideos;
