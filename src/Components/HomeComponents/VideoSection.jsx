import { useState } from "react";
import { X } from "lucide-react";
// import thumb1 from "../../assets/karthik.jpeg";
// import thumb2 from "../../assets/karthik.jpeg";
// import thumb3 from "../../assets/karthik.jpeg";

import thumb1 from "../../assets/img1.webp";
import thumb2 from "../../assets/img2.webp";
import thumb3 from "../../assets/img3.webp";

import video1 from "../../assets/video1.mp4";
import video2 from "../../assets/video2.mp4";
import video3 from "../../assets/video3.mp4";

const videoData = [
  { id: 1, thumbnail: thumb1, src: video1, title: "" },
  { id: 2, thumbnail: thumb2, src: video2, title: "" },
  { id: 3, thumbnail: thumb3, src: video3, title: "" },
];

export default function VideoPreviewSection() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <section className="py-16 bg-[#f8f9fa] flex flex-wrap justify-center items-center gap-10 px-6 md:px-12">
      {videoData.map((video) => (
        <div
          key={video.id}
          className="relative group w-full sm:w-[80%] md:w-[30%] rounded-3xl overflow-hidden shadow-2xl"
        >
          {/* Thumbnail */}
          <img
            src={video.thumbnail}
            alt={video.title}
            className="w-full h-[400px] sm:h-[500px] md:h-[550px] lg:h-[600px] object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-500"></div>

          {/* Play Button */}
          <button
            onClick={() => setSelectedVideo(video.src)}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-white/70 group-hover:bg-black/80 transition-all duration-300">
              <span className="text-black group-hover:text-white text-4xl font-bold">
                ►
              </span>
            </div>
          </button>

          {/* Text overlay on image */}
          <h3 className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-xl sm:text-2xl font-semibold text-center drop-shadow-lg">
            {video.title}
          </h3>
        </div>
      ))}

      {/* 🎬 Modal (Popup Video Player) */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4">
          <div className="relative w-full max-w-3xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl">
            <video
              src={selectedVideo}
              controls
              autoPlay
              className="w-full h-full object-cover"
            ></video>

            {/* ❌ Close Button */}
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-3 right-3 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 transition"
            >
              <X size={28} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
