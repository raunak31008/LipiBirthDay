import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Photo } from "@/lib/photos";

interface PhotoLightboxProps {
  photos?: Photo[];
  currentPhoto?: Photo | null;
  isOpen?: boolean;
  onClose?: () => void;
  onNext?: () => void;
  onPrevious?: () => void;
}

// Global lightbox state
let globalLightboxState = {
  isOpen: false,
  currentPhoto: null as Photo | null,
  photos: [] as Photo[],
  setters: [] as Array<(state: any) => void>
};

export function useLightbox() {
  const [state, setState] = useState(globalLightboxState);

  useEffect(() => {
    globalLightboxState.setters.push(setState);
    return () => {
      globalLightboxState.setters = globalLightboxState.setters.filter(s => s !== setState);
    };
  }, []);

  const openLightbox = (photo: Photo, photos: Photo[] = [photo]) => {
    globalLightboxState = {
      ...globalLightboxState,
      isOpen: true,
      currentPhoto: photo,
      photos
    };
    globalLightboxState.setters.forEach(setter => setter(globalLightboxState));
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    globalLightboxState = {
      ...globalLightboxState,
      isOpen: false,
      currentPhoto: null
    };
    globalLightboxState.setters.forEach(setter => setter(globalLightboxState));
    document.body.style.overflow = '';
  };

  const nextPhoto = () => {
    if (globalLightboxState.photos.length <= 1) return;
    const currentIndex = globalLightboxState.photos.findIndex(p => p.id === globalLightboxState.currentPhoto?.id);
    const nextIndex = (currentIndex + 1) % globalLightboxState.photos.length;
    globalLightboxState = {
      ...globalLightboxState,
      currentPhoto: globalLightboxState.photos[nextIndex]
    };
    globalLightboxState.setters.forEach(setter => setter(globalLightboxState));
  };

  const previousPhoto = () => {
    if (globalLightboxState.photos.length <= 1) return;
    const currentIndex = globalLightboxState.photos.findIndex(p => p.id === globalLightboxState.currentPhoto?.id);
    const prevIndex = currentIndex === 0 ? globalLightboxState.photos.length - 1 : currentIndex - 1;
    globalLightboxState = {
      ...globalLightboxState,
      currentPhoto: globalLightboxState.photos[prevIndex]
    };
    globalLightboxState.setters.forEach(setter => setter(globalLightboxState));
  };

  return {
    ...state,
    openLightbox,
    closeLightbox,
    nextPhoto,
    previousPhoto
  };
}

export default function PhotoLightbox() {
  const { isOpen, currentPhoto, photos, closeLightbox, nextPhoto, previousPhoto } = useLightbox();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      switch (e.key) {
        case 'Escape':
          closeLightbox();
          break;
        case 'ArrowLeft':
          previousPhoto();
          break;
        case 'ArrowRight':
          nextPhoto();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeLightbox, nextPhoto, previousPhoto]);

  if (!currentPhoto) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/80 modal-backdrop"
            onClick={closeLightbox}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Content */}
          <div className="relative z-10 max-w-4xl max-h-full p-4">
            {/* Close Button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute -top-12 right-0 text-white hover:text-pink-300 z-20"
              onClick={closeLightbox}
            >
              <X className="w-6 h-6" />
            </Button>

            {/* Navigation Buttons */}
            {photos.length > 1 && (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-pink-300 z-20"
                  onClick={previousPhoto}
                >
                  <ChevronLeft className="w-8 h-8" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-pink-300 z-20"
                  onClick={nextPhoto}
                >
                  <ChevronRight className="w-8 h-8" />
                </Button>
              </>
            )}

            {/* Image or Video */}
            {currentPhoto.type === "video" ? (
              <motion.video
                key={currentPhoto.id}
                src={currentPhoto.src}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                controls
                autoPlay
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
            ) : (
              <motion.img
                key={currentPhoto.id}
                src={currentPhoto.src}
                alt={currentPhoto.alt}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
