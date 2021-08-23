import React from "react";
function Music(props) {
  return (
    <div className="container">
      <audio id="audio" autoPlay>
        {/* <source src={} type="audio/mp3" /> */}
      </audio>
    </div>
  );
}

export default Music;
