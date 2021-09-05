import React, { useEffect, useState } from "react";
// import alanBtn from "@alan-ai/alan-sdk-web";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { listMusic } from "../../resource/musicSrc";

import youtubeLoad from "../../service/youtubeLoad";
import { useSpeechSynthesis } from "react-speech-kit";

function Home({ props }) {
  const [isMusic, setIsMusic] = useState(false);
  const [audio, setAudio] = useState(null);
  // const [index, setIndex] = useState(null);
  const [video, setVideo] = useState(null);
  const [videoID, setVideoID] = useState(null);
  const [isCommand, setIsCommand] = useState(false);
  // console.log(isCommand);
  const { speak } = useSpeechSynthesis();
  let playlist = listMusic.arrayMusic;
  useEffect(() => {
    setAudio(document.getElementById("audio"));
    if (audio) audio.volume = 0.1;
    setVideoID(document.getElementById("video"));
  }, [audio]);

  const commands = [
    {
      command: "hello",
      callback: ({ resetTranscript }) => {
        speak({ text: "I'm listening your command, sir !" });
        setIsCommand(true);
        resetTranscript();
      },
    },
    {
      command: "stop",
      callback: ({ resetTranscript }) => {
        speak({ text: "See you next time !" });
        setIsCommand(false);
        resetTranscript();
      },
    },
    {
      command: "làm mới",
      callback: ({ resetTranscript }) => {
        // alert("Làm mới");
        resetTranscript();
      },
    },
    {
      command: "play music",
      callback: ({ resetTranscript }) => {
        if (isCommand) {
          setIsMusic(true);
          audio.play();
          resetTranscript();
        } else {
          speak({ text: "You have to say Active to use function !" });
        }
      },
    },
    {
      command: "tải lại",
      callback: () => {
        if (isCommand) {
          window.location.reload();
        } else {
          speak({ text: "You have to say Active to use function !" });
        }
      },
    },
    {
      command: "tắt nhạc",
      callback: ({ resetTranscript }) => {
        if (isCommand) {
          audio.pause();
        } else {
          speak({ text: "You have to say Active to use function !" });
        }
        resetTranscript();
      },
    },
    {
      command: "tắt video",
      callback: ({ resetTranscript }) => {
        if (isCommand) {
          videoID && videoID.setAttribute("src", "");
          setVideo(null);
          resetTranscript();
        } else {
          speak({ text: "You have to say Active to use function !" });
        }
      },
    },
    {
      command: "bài khác",
      callback: ({ resetTranscript }) => {
        if (isCommand) {
          playAnother();
          resetTranscript();
        } else {
          speak({ text: "You have to say Active to use function !" });
        }
      },
    },
    {
      command: "max volume",
      callback: ({ resetTranscript }) => {
        if (isCommand) {
          if (audio) {
            audio.volume = 0.5;
            resetTranscript();
          }
        } else {
          speak({ text: "You have to say Active to use function !" });
        }
      },
    },
    {
      command: "small volume",
      callback: ({ resetTranscript }) => {
        if (audio) {
          audio.volume = 0.1;
        }
        resetTranscript();
      },
    },

    {
      command: "mở *",
      callback: (key, { resetTranscript }) => {
        if (isCommand) {
          speak({ text: "On Your Command" });
          (async () => {
            try {
              const res = await youtubeLoad.get("/search", {
                params: { q: key },
              });
              console.log(res.data);
              // setIndex(Math.floor(Math.random() * res.data.items.length));
              setVideo(res.data.items);
            } catch (error) {}
          })();
          resetTranscript();
        } else {
          speak({ text: "You have to say Active to use function !" });
        }
      },
    },
  ];
  // console.log(index);
  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition(
    { commands }
  );

  if (!browserSupportsSpeechRecognition) {
    alert("Not Support");
    return null;
  }

  const playAnother = () => {
    let lastSong = null;
    let selection = null;
    while (selection === lastSong) {
      // Repeat until a different song is selected
      selection = Math.floor(Math.random() * playlist.length);
    }
    let src = document.getElementById("src");
    if (audio && src) {
      src.setAttribute(
        "src",
        playlist[Math.floor(Math.random() * playlist.length)]
      );
      audio.load();
      audio.play();
    }
  };

  return (
    <>
      <div
        onLoad={() => {
          SpeechRecognition.startListening({
            continuous: true,
            lang: "vi-VN",
          });
        }}
        className="container-fluid"
      >
        <div
          className="row text-center"
          style={{ height: "100vh", margin: "auto" }}
        >
          <div className="col-12">
            <div className="">
              <iframe
                height="900"
                width="1600"
                onCanPlay={(e) => e.target.playVideo()}
                id="video"
                src={
                  video &&
                  `https://www.youtube.com/embed/${video[0].id.videoId}?autoplay=1`
                }
                allowFullScreen
                allow="autoplay"
                title="Your Result"
              />
            </div>
          </div>
          <div className="col-12">
            {transcript}
            <button
              type="button"
              className="btn btn-info"
              onClick={() => speak({ text: transcript })}
            >
              Speak
            </button>
            <ul style={{ listStyle: "none" }}>
              <li>bật nhạc: Chạy nhạc trong máy tao</li>
              <li>tắt nhạc : Tắt nhạc trong máy tao</li>
              <li>tải lại : refresh trang</li>
              <li>làm mới : xóa hết lệnh</li>
              <li>nhỏ : Giảm Âm lượng vừa nghe</li>
              <li>nhạc lớn: Dành cho lỗ tai trâu</li>
              <li>mở + tên : nghe nhạc trong youtube theo tên m tìm</li>
              <li>tắt video: tắt không nghe nữa</li>
            </ul>
          </div>
          <audio
            onEnded={(e) => {
              playAnother();
            }}
            id="audio"
            controls
            // hidden
            autoPlay={isMusic}
          >
            <source
              id="src"
              src={playlist[Math.floor(Math.random() * playlist.length)]}
              type="audio/mp3"
            />
          </audio>
        </div>
      </div>
    </>
  );
}
export default Home;
