import { motion } from "framer-motion";
import PhotoCard from "./ui/photo-card";
import { Photo } from "@/lib/photos";

interface PhotoGalleryProps {
  photos: Photo[];
  title: string;
  subtitle?: string;
  onPhotoClick: (photo: Photo) => void;
  columns?: number;
}

export default function PhotoGallery({ 
  photos, 
  title, 
  subtitle, 
  onPhotoClick,
  columns = 3 
}: PhotoGalleryProps) {
  const gridCols = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3", 
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>

        <motion.div 
          className={`grid ${gridCols[columns as keyof typeof gridCols]} gap-6`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <PhotoCard
                src={photo.src}
                alt={photo.alt}
                onClick={() => onPhotoClick(photo)}
                aspectRatio={photo.category === "couple" ? "landscape" : "portrait"}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
