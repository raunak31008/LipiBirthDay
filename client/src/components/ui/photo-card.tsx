import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface PhotoCardProps {
  src: string;
  alt: string;
  onClick?: () => void;
  className?: string;
  aspectRatio?: "square" | "portrait" | "landscape";
  type?: "image" | "video";
}

export default function PhotoCard({ 
  src, 
  alt, 
  onClick, 
  className,
  aspectRatio = "portrait",
  type = "image"
}: PhotoCardProps) {
  const aspectClasses = {
    square: "aspect-square",
    portrait: "aspect-[4/5]", 
    landscape: "aspect-[3/2]"
  };

  return (
    <motion.div
      className={cn(
        "photo-hover rounded-2xl overflow-hidden shadow-lg cursor-pointer relative",
        className
      )}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {type === "video" ? (
        <>
          <video
            src={src}
            className={cn("w-full object-cover", aspectClasses[aspectRatio])}
            muted
            playsInline
            preload="metadata"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
              <Play className="w-8 h-8 text-pink-600 ml-1" />
            </div>
          </div>
        </>
      ) : (
        <img
          src={src}
          alt={alt}
          className={cn("w-full object-cover", aspectClasses[aspectRatio])}
          loading="lazy"
        />
      )}
    </motion.div>
  );
}
