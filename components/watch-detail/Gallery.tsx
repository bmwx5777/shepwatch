"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

type GalleryProps = {
  images: string[];
  alt: string;
};

export default function Gallery({ images, alt }: GalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [showLens, setShowLens] = useState(false);
  const [lensPosition, setLensPosition] = useState({ x: 0, y: 0 });
  const [lensBgPosition, setLensBgPosition] = useState("50% 50%");

  const [modalOpen, setModalOpen] = useState(false);
  const [modalShowLens, setModalShowLens] = useState(false);
  const [modalLensPosition, setModalLensPosition] = useState({ x: 0, y: 0 });
  const [modalLensBgPosition, setModalLensBgPosition] = useState("50% 50%");

  const thumbsRef = useRef<HTMLDivElement | null>(null);
  const modalThumbsRef = useRef<HTMLDivElement | null>(null);

  const selectedImage = images[selectedIndex];

  const lensSize = 260;
  const zoom = 2.8;

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setModalOpen(false);
      }
    }

    if (modalOpen) {
      document.addEventListener("keydown", onKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [modalOpen]);

  useEffect(() => {
    thumbsRef.current?.scrollTo({
      left: Math.max(0, (selectedIndex - 2) * 88),
      behavior: "smooth",
    });

    modalThumbsRef.current?.scrollTo({
      left: Math.max(0, (selectedIndex - 1) * 112),
      behavior: "smooth",
    });
  }, [selectedIndex]);

  const updateLens = (
    e: React.MouseEvent<HTMLDivElement>,
    setPosition: React.Dispatch<React.SetStateAction<{ x: number; y: number }>>,
    setBgPosition: React.Dispatch<React.SetStateAction<string>>
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const rawX = e.clientX - rect.left;
    const rawY = e.clientY - rect.top;

    const halfLens = lensSize / 2;

    const clampedX = Math.max(halfLens, Math.min(rawX, rect.width - halfLens));
    const clampedY = Math.max(halfLens, Math.min(rawY, rect.height - halfLens));

    setPosition({ x: clampedX, y: clampedY });

    const bgX = (rawX / rect.width) * 100;
    const bgY = (rawY / rect.height) * 100;

    setBgPosition(`${bgX}% ${bgY}%`);
  };

  const prevImage = () => {
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const scrollThumbsLeft = () => {
    thumbsRef.current?.scrollBy({ left: -264, behavior: "smooth" });
  };

  const scrollThumbsRight = () => {
    thumbsRef.current?.scrollBy({ left: 264, behavior: "smooth" });
  };

  const scrollModalThumbsLeft = () => {
    modalThumbsRef.current?.scrollBy({ left: -460, behavior: "smooth" });
  };

  const scrollModalThumbsRight = () => {
    modalThumbsRef.current?.scrollBy({ left: 460, behavior: "smooth" });
  };

  const showThumbArrows = images.length > 6;

  return (
    <>
      <div>
        <div className="overflow-hidden rounded-[2rem] border border-[#e7ddd1] bg-white p-3 shadow-[0_10px_28px_rgba(0,0,0,0.04)]">
          <div
            className="relative aspect-[4/4.8] overflow-hidden rounded-[1.5rem] bg-[#f1ece4] cursor-crosshair"
            onMouseEnter={() => setShowLens(true)}
            onMouseLeave={() => setShowLens(false)}
            onMouseMove={(e) => updateLens(e, setLensPosition, setLensBgPosition)}
            onClick={() => setModalOpen(true)}
          >
            <Image
              src={selectedImage}
              alt={alt}
              fill
              className="object-cover"
              priority
            />

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[#ddd4c8] bg-white/92 text-[#3f3934] shadow-[0_8px_24px_rgba(0,0,0,0.12)] backdrop-blur-sm transition hover:bg-white"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[#ddd4c8] bg-white/92 text-[#3f3934] shadow-[0_8px_24px_rgba(0,0,0,0.12)] backdrop-blur-sm transition hover:bg-white"
              aria-label="Next image"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {showLens && (
              <div
                className="pointer-events-none absolute z-10 overflow-hidden rounded-[1.6rem] border border-white/70 shadow-[0_10px_30px_rgba(0,0,0,0.18)]"
                style={{
                  width: `${lensSize}px`,
                  height: `${lensSize}px`,
                  left: `${lensPosition.x}px`,
                  top: `${lensPosition.y}px`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <div
                  className="h-full w-full"
                  style={{
                    backgroundImage: `url(${selectedImage})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: `${zoom * 100}%`,
                    backgroundPosition: lensBgPosition,
                  }}
                />
              </div>
            )}
          </div>
        </div>

        <div className="mt-4 flex items-center gap-3">
          {showThumbArrows && (
            <button
              type="button"
              onClick={scrollThumbsLeft}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#ddd4c8] bg-white text-[#4f4842] shadow-[0_6px_18px_rgba(0,0,0,0.04)] transition hover:bg-[#f6f1ea]"
              aria-label="Scroll thumbnails left"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
          )}

          <div
            ref={thumbsRef}
            className="flex max-w-[534px] gap-3 overflow-x-auto pb-1 scroll-smooth"
          >
            {images.map((image, index) => {
              const isActive = selectedIndex === index;

              return (
                <button
                  key={`${image}-${index}`}
                  type="button"
                  onClick={() => setSelectedIndex(index)}
                  className={`relative h-20 w-[76px] shrink-0 overflow-hidden rounded-[1rem] border transition duration-300 ${isActive
                    ? "border-[#2f2925] ring-2 ring-[#d8cec0] opacity-100"
                    : "border-[#e7ddd1] opacity-50 hover:opacity-80 hover:border-[#cfc3b3]"
                    }`}
                >
                  <Image
                    src={image}
                    alt={`${alt} ${index + 1}`}
                    fill
                    className={`object-cover transition duration-300 ${isActive ? "scale-100" : "scale-[0.98]"
                      }`}
                  />
                </button>
              );
            })}
          </div>

          {showThumbArrows && (
            <button
              type="button"
              onClick={scrollThumbsRight}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#ddd4c8] bg-white text-[#4f4842] shadow-[0_6px_18px_rgba(0,0,0,0.04)] transition hover:bg-[#f6f1ea]"
              aria-label="Scroll thumbnails right"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>

      {modalOpen && (
        <div
          className="fixed inset-0 z-[120] bg-black/45 backdrop-blur-[2px]"
          onClick={() => setModalOpen(false)}
        >
          <div className="flex h-full w-full items-center justify-center p-4 md:p-8">
            <div
              className="relative flex h-full max-h-[95vh] w-full max-w-[1400px] flex-col rounded-[2rem] bg-[#efede9] p-4 shadow-[0_24px_80px_rgba(0,0,0,0.28)]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-4 flex justify-between">
                <div className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-medium text-[#2f2925] shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
                  {selectedIndex + 1} / {images.length}
                </div>

                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 text-base font-medium text-[#2f2925] shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition hover:bg-[#f7f3ed]"
                >
                  Close
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="relative flex-1 overflow-hidden rounded-[1.7rem] bg-[#dedbd6]">
                <div
                  className="relative h-full w-full cursor-crosshair overflow-hidden"
                  onMouseEnter={() => setModalShowLens(true)}
                  onMouseLeave={() => setModalShowLens(false)}
                  onMouseMove={(e) =>
                    updateLens(e, setModalLensPosition, setModalLensBgPosition)
                  }
                >
                  <Image
                    src={selectedImage}
                    alt={alt}
                    fill
                    className="object-contain"
                    priority
                  />

                  <button
                    type="button"
                    onClick={prevImage}
                    className="absolute left-6 top-1/2 z-20 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#3f3934] shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition hover:bg-[#f7f3ed]"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>

                  <button
                    type="button"
                    onClick={nextImage}
                    className="absolute right-6 top-1/2 z-20 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#3f3934] shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition hover:bg-[#f7f3ed]"
                    aria-label="Next image"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>

                  {modalShowLens && (
                    <div
                      className="pointer-events-none absolute z-10 overflow-hidden rounded-[1.6rem] border border-white/70 shadow-[0_12px_36px_rgba(0,0,0,0.22)]"
                      style={{
                        width: `${lensSize}px`,
                        height: `${lensSize}px`,
                        left: `${modalLensPosition.x}px`,
                        top: `${modalLensPosition.y}px`,
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <div
                        className="h-full w-full"
                        style={{
                          backgroundImage: `url(${selectedImage})`,
                          backgroundRepeat: "no-repeat",
                          backgroundSize: `${zoom * 100}%`,
                          backgroundPosition: modalLensBgPosition,
                        }}
                      />
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-4 flex items-center justify-center gap-3">
                {showThumbArrows && (
                  <button
                    type="button"
                    onClick={scrollModalThumbsLeft}
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#ddd4c8] bg-white text-[#4f4842] shadow-[0_6px_18px_rgba(0,0,0,0.04)] transition hover:bg-[#f6f1ea]"
                    aria-label="Scroll modal thumbnails left"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                )}

                <div
                  ref={modalThumbsRef}
                  className="flex max-w-[798px] gap-3 overflow-x-auto pb-1 scroll-smooth"
                >
                  {images.map((image, index) => {
                    const isActive = selectedIndex === index;

                    return (
                      <button
                        key={`modal-${image}-${index}`}
                        type="button"
                        onClick={() => setSelectedIndex(index)}
                        className={`relative h-24 w-[120px] shrink-0 overflow-hidden rounded-[1rem] border transition duration-300 ${isActive
                          ? "border-[#2f2925] ring-2 ring-[#d8cec0] opacity-100"
                          : "border-[#d8d0c5] opacity-45 hover:opacity-75"
                          }`}
                      >
                        <Image
                          src={image}
                          alt={`${alt} ${index + 1}`}
                          fill
                          className={`object-cover transition duration-300 ${isActive ? "scale-100" : "scale-[0.98]"
                            }`}
                        />
                      </button>
                    );
                  })}
                </div>

                {showThumbArrows && (
                  <button
                    type="button"
                    onClick={scrollModalThumbsRight}
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#ddd4c8] bg-white text-[#4f4842] shadow-[0_6px_18px_rgba(0,0,0,0.04)] transition hover:bg-[#f6f1ea]"
                    aria-label="Scroll modal thumbnails right"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}