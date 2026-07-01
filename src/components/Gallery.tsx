import React, { useState, useRef, useEffect } from "react";

const galleryImages = Array.from(
  { length: 11 },
  (_, index) => `/assets/images/gallery/image/${index + 1}.webp`
);

const galleryVideos = Array.from(
  { length: 4 },
  (_, index) => `/assets/images/gallery/video/${index + 1}.mp4`
);

const Gallery = () => {
  const [activeTab, setActiveTab] = useState<"images" | "videos">("images");
  const [isPaused, setIsPaused] = useState(false);

  const [selectedMedia, setSelectedMedia] = useState<{
    type: "image" | "video";
    src: string;
  } | null>(null);

  const sliderRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(0);
  const scrollPositionRef = useRef(0);

  const allImages = [...galleryImages, ...galleryImages];

  const animate = () => {
    if (!isPaused && sliderRef.current) {
      scrollPositionRef.current += 0.3;

      const maxScroll = sliderRef.current.scrollWidth / 2;

      if (scrollPositionRef.current >= maxScroll) {
        scrollPositionRef.current = 0;
      }

      sliderRef.current.scrollLeft = scrollPositionRef.current;
    }

    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    animationRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationRef.current);
  }, [isPaused]);

  return (
    <section id="gallery" className="py-24 bg-[#F8FAFC]">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="max-w-3xl mx-auto text-center mb-20"
          data-aos="fade-up"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-slate-900 mb-4">
            Our Gallery
          </h2>

          <p className="text-slate-500 text-lg sm:text-xl">
            Take a look at our clinic and smile transformations
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex bg-white rounded-full p-1.5 shadow border">
            <button
              onClick={() => setActiveTab("images")}
              className={`px-8 py-3 rounded-full font-semibold transition ${
                activeTab === "images"
                  ? "bg-primary-600 text-white"
                  : "text-slate-600"
              }`}
            >
              Images
            </button>

            <button
              onClick={() => setActiveTab("videos")}
              className={`px-8 py-3 rounded-full font-semibold transition ${
                activeTab === "videos"
                  ? "bg-primary-600 text-white"
                  : "text-slate-600"
              }`}
            >
              Videos
            </button>
          </div>
        </div>

        {/* IMAGE TAB */}
        {activeTab === "images" ? (
          <div data-aos="fade-up">
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#F8FAFC] to-transparent z-10 pointer-events-none" />

              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#F8FAFC] to-transparent z-10 pointer-events-none" />

              <div
                ref={sliderRef}
                className="overflow-x-hidden py-4"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <div className="flex gap-6" style={{ width: "max-content" }}>
                  {allImages.map((image, index) => (
                    <div
                      key={index}
                      className="relative w-56 md:w-64 aspect-[9/16] rounded-2xl overflow-hidden flex-shrink-0 border border-slate-200 shadow-md hover:shadow-xl transition-all"
                    >
                      <img
                        src={image}
                        alt={`Gallery ${index + 1}`}
                        loading="lazy"
                        className="w-full h-full object-cover cursor-pointer transition-transform duration-500 hover:scale-105"
                        onClick={() =>
                          setSelectedMedia({
                            type: "image",
                            src: image,
                          })
                        }
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* VIDEO TAB */
          <div
            data-aos="fade-up"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {galleryVideos.map((video, index) => (
              <div
                key={index}
                className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md aspect-[9/16]"
              >
                <video
                  src={video}
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  controls={false}
                  className="w-full h-full object-cover cursor-pointer"
                  onMouseEnter={(e) => e.currentTarget.play()}
                  onMouseLeave={(e) => {
                    e.currentTarget.pause();
                    e.currentTarget.currentTime = 0;
                  }}
                  onClick={() =>
                    setSelectedMedia({
                      type: "video",
                      src: video,
                    })
                  }
                />
              </div>
            ))}
          </div>
        )}

        {/* Fullscreen Modal */}
        {selectedMedia && (
          <div
            className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedMedia(null)}
          >
            <button
              className="absolute top-6 right-6 text-white text-5xl"
              onClick={() => setSelectedMedia(null)}
            >
              ×
            </button>

            {selectedMedia.type === "image" ? (
              <img
                src={selectedMedia.src}
                alt=""
                className="max-w-full max-h-[90vh] rounded-xl"
                onClick={(e) => e.stopPropagation()}
              />
            ) : (
              <video
                src={selectedMedia.src}
                controls
                autoPlay
                playsInline
                className="max-w-full max-h-[90vh] rounded-xl"
                onClick={(e) => e.stopPropagation()}
              />
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;