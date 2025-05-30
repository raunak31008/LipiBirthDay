import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PhotoCardProps {
  src: string;
  alt: string;
  onClick?: () => void;
  className?: string;
  aspectRatio?: "square" | "portrait" | "landscape";
}

export default function PhotoCard({ 
  src, 
  alt, 
  onClick, 
  className,
  aspectRatio = "portrait" 
}: PhotoCardProps) {
  const aspectClasses = {
    square: "aspect-square",
    portrait: "aspect-[4/5]", 
    landscape: "aspect-[3/2]"
  };

  return (
    <motion.div
      className={cn(
        "photo-hover rounded-2xl overflow-hidden shadow-lg cursor-pointer",
        className
      )}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <img
        src={src}
        alt={alt}
        className={cn("w-full object-cover", aspectClasses[aspectRatio])}
        loading="lazy"
      />
    </motion.div>
  );
}
