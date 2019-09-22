import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div />;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className='ui embed'>
        <iframe title='video player' src={videoSrc} />
      </div>
      <div
        style={{ background: "#7159C1", color: "white" }}
        className='ui segment'
      >
        <h4 style={{ color: "white" }} className='ui header'>
          {video.snippet.title}
        </h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
