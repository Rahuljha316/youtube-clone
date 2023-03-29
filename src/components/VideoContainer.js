import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_URL } from "../utils/constants";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_URL);
    const json = await data.json();

    setVideos(json.items);
  };

  useEffect(() => {
    return () =>getVideos();
  }, []);

  return (
    <div className="flex flex-wrap m-2 p-2">
        {videos.map((video) =><VideoCard info={video}/> )}
      {/* <VideoCard info={videos[0]} /> */}
    </div>
  );
};

export default VideoContainer;
