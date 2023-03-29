const VideoCard = ({ info }) => {
  console.log("hi", info);
  console.log();

  const { snippet, statistics} = info;
  const {viewCount} = statistics

  const { thumbnails,title,channelTitle } = snippet;
  return (
  <div className="m-5">
    <img alt="thumbnail" src={thumbnails.medium.url}/>
    <div>{title}</div>
    <div>{channelTitle}</div>
    <div>{viewCount}-view</div>
  
  </div>)
};
export default VideoCard;
