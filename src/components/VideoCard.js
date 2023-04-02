const VideoCard = ({ info }) => {
  console.log("hi", info);
  console.log();

  const { snippet, statistics} = info;
  const {viewCount} = statistics

  const { thumbnails,title,channelTitle } = snippet;
  return (
  <div className="m-2 w-52">
    <img alt="thumbnail" src={thumbnails.medium.url}/>
    <div className="flex-wrap font-bold">{title}</div>
    <div>{channelTitle}</div>
    <div>{viewCount}-view</div>
  
  </div>)
};
export default VideoCard;
