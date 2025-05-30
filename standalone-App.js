import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

// Photo data - replace these paths with your actual photo/video paths
const photoData = {
  soloPhotos: [
    { id: "solo-1", src: "./assets/WhatsApp Image 2025-05-30 at 5.57.44 PM (1).jpeg", alt: "Beautiful portrait", category: "solo", type: "image" },
    { id: "solo-2", src: "./assets/WhatsApp Image 2025-05-30 at 5.57.45 PM.jpeg", alt: "Elegant portrait", category: "solo", type: "image" },
    { id: "solo-3", src: "./assets/WhatsApp Image 2025-05-30 at 5.57.46 PM.jpeg", alt: "Natural beauty portrait", category: "solo", type: "image" },
    { id: "solo-4", src: "./assets/WhatsApp Image 2025-05-30 at 5.57.52 PM.jpeg", alt: "Radiant smile portrait", category: "solo", type: "image" },
    { id: "solo-5", src: "./assets/WhatsApp Image 2025-05-30 at 5.59.53 PM (1).jpeg", alt: "Gorgeous moment", category: "solo", type: "image" },
    { id: "solo-6", src: "./assets/WhatsApp Image 2025-05-30 at 5.59.54 PM.jpeg", alt: "Stunning beauty", category: "solo", type: "image" },
    { id: "solo-7", src: "./assets/WhatsApp Image 2025-05-30 at 5.57.43 PM.jpeg", alt: "Lovely portrait", category: "solo", type: "image" },
    { id: "solo-8", src: "./assets/WhatsApp Image 2025-05-30 at 5.57.44 PM (2).jpeg", alt: "Beautiful moment", category: "solo", type: "image" },
    { id: "solo-9", src: "./assets/WhatsApp Image 2025-05-30 at 5.59.46 PM (1).jpeg", alt: "Sweet smile", category: "solo", type: "image" },
    { id: "solo-10", src: "./assets/WhatsApp Image 2025-05-30 at 5.59.46 PM (2).jpeg", alt: "Charming portrait", category: "solo", type: "image" },
    { id: "solo-11", src: "./assets/WhatsApp Image 2025-05-30 at 5.59.52 PM.jpeg", alt: "Radiant beauty", category: "solo", type: "image" },
    { id: "solo-12", src: "./assets/04f609b0-44d6-41e2-b07a-0eb55ae21c12.jpeg", alt: "Perfect moment", category: "solo", type: "image" },
    { id: "solo-video-1", src: "./assets/WhatsApp Video 2025-05-30 at 5.57.47 PM.mp4", alt: "Beautiful video moment", category: "solo", type: "video" },
    { id: "solo-video-2", src: "./assets/WhatsApp Video 2025-05-30 at 5.57.49 PM (1).mp4", alt: "Sweet video", category: "solo", type: "video" },
    { id: "solo-video-3", src: "./assets/WhatsApp Video 2025-05-30 at 5.57.55 PM.mp4", alt: "Lovely video moment", category: "solo", type: "video" }
  ],
  couplePhotos: [
    { id: "couple-1", src: "./assets/WhatsApp Image 2025-05-30 at 5.58.04 PM (1).jpeg", alt: "Romantic couple moment", category: "couple", type: "image" },
    { id: "couple-2", src: "./assets/WhatsApp Image 2025-05-30 at 5.58.05 PM (1).jpeg", alt: "Happy couple laughing", category: "couple", type: "image" },
    { id: "couple-3", src: "./assets/WhatsApp Image 2025-05-30 at 5.58.07 PM.jpeg", alt: "Intimate couple moment", category: "couple", type: "image" },
    { id: "couple-4", src: "./assets/WhatsApp Image 2025-05-30 at 5.58.07 PM (1).jpeg", alt: "Couple walking together", category: "couple", type: "image" },
    { id: "couple-5", src: "./assets/WhatsApp Image 2025-05-30 at 5.58.08 PM (1).jpeg", alt: "Tender couple moment", category: "couple", type: "image" },
    { id: "couple-6", src: "./assets/WhatsApp Image 2025-05-30 at 5.58.09 PM.jpeg", alt: "Romantic couple embrace", category: "couple", type: "image" },
    { id: "couple-video-1", src: "./assets/WhatsApp Video 2025-05-30 at 5.58.00 PM.mp4", alt: "Beautiful couple video", category: "couple", type: "video" },
    { id: "couple-video-2", src: "./assets/WhatsApp Video 2025-05-30 at 5.58.03 PM.mp4", alt: "Sweet moments together", category: "couple", type: "video" },
    { id: "couple-video-3", src: "./assets/WhatsApp Video 2025-05-30 at 5.58.10 PM.mp4", alt: "Love in motion", category: "couple", type: "video" }
  ],
  celebrationPhotos: [
    { id: "celebration-1", src: "./assets/WhatsApp Image 2025-05-30 at 5.59.46 PM (1).jpeg", alt: "Birthday celebration moment", category: "celebration", type: "image" },
    { id: "celebration-2", src: "./assets/WhatsApp Image 2025-05-30 at 5.59.46 PM (2).jpeg", alt: "Special birthday moment", category: "celebration", type: "image" },
    { id: "celebration-3", src: "./assets/WhatsApp Image 2025-05-30 at 5.58.04 PM (1).jpeg", alt: "Celebrating together", category: "celebration", type: "image" },
    { id: "celebration-4", src: "./assets/WhatsApp Image 2025-05-30 at 5.58.05 PM (1).jpeg", alt: "Birthday joy", category: "celebration", type: "image" },
    { id: "celebration-video-1", src: "./assets/WhatsApp Video 2025-05-30 at 5.59.50 PM.mp4", alt: "Special birthday video moment", category: "celebration", type: "video" }
  ],
  heroPhoto: { id: "hero", src: "./assets/WhatsApp Image 2025-05-30 at 5.57.45 PM.jpeg", alt: "Beautiful hero portrait", category: "solo" }
};

// Love reaction system
const loveEmojis = ['💖', '💕', '💗', '💝', '😘', '🥰', '😍', '💋', '🌹', '💐', '✨', '🎀'];

const createEmojiReaction = (emoji, x, y) => {
  const emojiElement = document.createElement('div');
  emojiElement.textContent = emoji;
  emojiElement.className = 'emoji-reaction floating-emoji';
  emojiElement.style.left = (x + Math.random() * 100 - 50) + 'px';
  emojiElement.style.top = y + 'px';
  
  document.body.appendChild(emojiElement);
  
  setTimeout(() => {
    if (emojiElement && emojiElement.parentNode) {
      emojiElement.parentNode.removeChild(emojiElement);
    }
  }, 3000);
};

const triggerEmojiReaction = (emoji) => {
  for (let i = 0; i < 3; i++) {
    setTimeout(() => {
      const x = Math.random() * window.innerWidth;
      const y = window.innerHeight - 100;
      createEmojiReaction(emoji, x, y);
    }, i * 200);
  }
};

// Auto love emojis
const startAutoLoveEmojis = () => {
  setInterval(() => {
    if (Math.random() < 0.3) {
      const randomEmoji = loveEmojis[Math.floor(Math.random() * loveEmojis.length)];
      const x = Math.random() * window.innerWidth;
      const y = window.innerHeight;
      createEmojiReaction(randomEmoji, x, y);
    }
  }, 5000);
};

// Global lightbox state
let globalLightboxState = {
  isOpen: false,
  currentPhoto: null,
  photos: [],
  setters: []
};

const useLightbox = () => {
  const [state, setState] = useState(globalLightboxState);

  useEffect(() => {
    globalLightboxState.setters.push(setState);
    return () => {
      globalLightboxState.setters = globalLightboxState.setters.filter(s => s !== setState);
    };
  }, []);

  const openLightbox = (photo, photos = [photo]) => {
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
};

// Components
const LoveReactionPanel = () => {
  const reactionEmojis = ['💖', '💕', '😘', '🥰', '😍', '💋', '🌹', '✨'];
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div className="love-reaction-panel">
      <button
        className="emoji-button"
        onClick={() => setIsExpanded(!isExpanded)}
        title="Love Reactions"
      >
        💕
      </button>
      {isExpanded && reactionEmojis.map((emoji, index) => (
        <motion.button
          key={index}
          className="emoji-button"
          onClick={() => {
            triggerEmojiReaction(emoji);
            setTimeout(() => triggerEmojiReaction(emoji), 300);
          }}
          title={`Send ${emoji}`}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 0.8 }}
        >
          {emoji}
        </motion.button>
      ))}
    </div>
  );
};

const PhotoCard = ({ src, alt, onClick, aspectRatio = "portrait", type = "image" }) => {
  const aspectClasses = {
    square: "aspect-square",
    portrait: "aspect-[4/5]",
    landscape: "aspect-[3/2]"
  };

  const handleDoubleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    createEmojiReaction('💖', x, y);
  };

  return (
    <motion.div
      className={`photo-hover rounded-2xl overflow-hidden shadow-lg cursor-pointer relative ${aspectClasses[aspectRatio]}`}
      onClick={onClick}
      onDoubleClick={handleDoubleClick}
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
            className="w-full h-full object-cover"
            muted
            playsInline
            preload="metadata"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
              <span className="text-pink-600 text-2xl ml-1">▶</span>
            </div>
          </div>
        </>
      ) : (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      )}
    </motion.div>
  );
};

const PhotoGallery = ({ photos, title, subtitle, onPhotoClick, columns = 3 }) => {
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
          className={`grid ${gridCols[columns]} gap-6`}
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
                type={photo.type}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const PhotoLightbox = () => {
  const { isOpen, currentPhoto, photos, closeLightbox, nextPhoto, previousPhoto } = useLightbox();

  useEffect(() => {
    const handleKeyDown = (e) => {
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
        default:
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
          <motion.div
            className="absolute inset-0 bg-black/80 modal-backdrop"
            onClick={closeLightbox}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <div className="relative z-10 max-w-4xl max-h-full p-4">
            <button
              className="absolute -top-12 right-0 text-white hover:text-pink-300 z-20 p-2 text-2xl"
              onClick={closeLightbox}
            >
              ×
            </button>

            {photos.length > 1 && (
              <>
                <button
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-pink-300 z-20 p-2 text-4xl"
                  onClick={previousPhoto}
                >
                  ‹
                </button>
                <button
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-pink-300 z-20 p-2 text-4xl"
                  onClick={nextPhoto}
                >
                  ›
                </button>
              </>
            )}

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
};

const Navigation = ({ currentPage, setCurrentPage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "wishes", label: "Birthday Wishes" },
    { id: "about", label: "About Us" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-pink-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div
            className="font-playfair text-xl font-semibold text-pink-600 flex items-center gap-2 cursor-pointer"
            onClick={() => setCurrentPage("home")}
          >
            <span>♥</span>
            My Beautiful Love
          </div>

          <div className="hidden md:flex space-x-8">
            {navItems.map(item => (
              <button
                key={item.id}
                className={`transition-colors duration-200 ${
                  currentPage === item.id
                    ? "text-pink-600 font-semibold"
                    : "text-gray-700 hover:text-pink-600"
                }`}
                onClick={() => setCurrentPage(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? "×" : "☰"}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-pink-200">
            <div className="px-4 py-2 space-y-2">
              {navItems.map(item => (
                <button
                  key={item.id}
                  className={`block w-full text-left py-2 transition-colors duration-200 ${
                    currentPage === item.id
                      ? "text-pink-600 font-semibold"
                      : "text-gray-700 hover:text-pink-600"
                  }`}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const Home = ({ setCurrentPage }) => {
  const { openLightbox } = useLightbox();

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={photoData.heroPhoto.src}
            alt={photoData.heroPhoto.alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/30 to-purple-500/30" />
        </div>

        <motion.div
          className="relative z-10 text-center px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="font-playfair text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Happy Birthday,
            <br />
            <motion.span
              className="text-pink-300 inline-block"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              Beautiful
            </motion.span>
          </motion.h1>
          
          <motion.p
            className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Today we celebrate the most amazing woman in the world. Your beauty, inside and out, lights up my entire universe.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button
              className="romantic-gradient text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 mx-auto"
              onClick={() => {
                triggerEmojiReaction('🎉');
                setTimeout(() => triggerEmojiReaction('💖'), 200);
                setTimeout(() => triggerEmojiReaction('✨'), 400);
                setCurrentPage("wishes");
              }}
            >
              See Your Birthday Wishes
              <span>♥</span>
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Solo Photos Gallery */}
      <PhotoGallery
        photos={photoData.soloPhotos}
        title="Celebrating You"
        subtitle="Every photo tells a story of your incredible beauty and the joy you bring to my life"
        onPhotoClick={(photo) => openLightbox(photo, photoData.soloPhotos)}
        columns={3}
      />

      {/* Couple Photos Gallery */}
      <PhotoGallery
        photos={photoData.couplePhotos}
        title="Our Beautiful Moments"
        subtitle="Every moment with you is a treasure that I hold close to my heart"
        onPhotoClick={(photo) => openLightbox(photo, photoData.couplePhotos)}
        columns={2}
      />
    </div>
  );
};

const BirthdayWishes = () => {
  const { openLightbox } = useLightbox();
  
  const birthdayMessages = [
    {
      icon: "♥",
      title: "Your Beauty Illuminates My World",
      content: "Every day I wake up grateful for the privilege of loving someone as extraordinary as you. Your smile lights up the darkest days, your laughter is the most beautiful melody I've ever heard, and your heart is the most precious gift I've ever received. On your birthday, I want you to know that you are not just beautiful on the outside, but your soul radiates a beauty that takes my breath away."
    },
    {
      icon: "⭐",
      title: "My Wishes for Your Special Year",
      content: "As you blow out your candles today, I wish for all your dreams to come true and for our love to grow even stronger. May this new year of your life be filled with adventures, laughter, and moments that make your heart sing. I promise to be by your side through every celebration, every challenge, and every beautiful ordinary day. You deserve all the happiness in the world, my love."
    },
    {
      icon: "∞",
      title: "Forever and Always",
      content: "Today isn't just about celebrating your birthday—it's about celebrating the incredible woman who has transformed my life in the most beautiful ways. You've taught me what true love feels like, what it means to have a partner who supports and believes in you unconditionally. I love you more than words could ever express, and I'm excited to create many more birthday memories together. Here's to you, my beautiful angel, today and always."
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-playfair text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
            Birthday Wishes for My Angel
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Every word comes from the depths of my heart, celebrating the incredible woman you are
          </p>
        </motion.div>

        <motion.div
          className="romantic-gradient rounded-3xl p-8 mb-16 text-center text-white shadow-xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-2xl">🎂</span>
            <h2 className="font-playfair text-2xl font-semibold">
              It's Your Special Day!
            </h2>
            <span className="text-2xl">✨</span>
          </div>
          <p className="text-lg opacity-90">
            Today marks another year of your beautiful existence, and I'm so grateful to celebrate it with you
          </p>
        </motion.div>

        <div className="space-y-12 mb-16">
          {birthdayMessages.map((message, index) => (
            <motion.div
              key={index}
              className="shadow-lg border border-pink-200/50 overflow-hidden rounded-lg bg-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <div
                className="p-8 cursor-pointer"
                onClick={() => {
                  const emojis = ['💖', '💕', '🥰'];
                  const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
                  triggerEmojiReaction(randomEmoji);
                }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 romantic-gradient rounded-full flex items-center justify-center">
                      <span className="text-white text-xl">{message.icon}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-playfair text-xl font-semibold text-gray-800 mb-3">
                      {message.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {message.content}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-3xl p-8 mb-16 border border-pink-200/50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center">
            <span className="text-4xl mb-4 block">🎁</span>
            <h3 className="font-playfair text-2xl font-semibold text-gray-800 mb-4">
              A Special Message Just for You
            </h3>
            <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
              My dearest love, on this special day, I want you to know that you are the most incredible gift life has ever given me. Your kindness, your strength, your beautiful spirit, and your loving heart make every day brighter. I am so proud to love you and be loved by you. May this birthday be the beginning of a year filled with all the joy, love, and dreams coming true that you so richly deserve. Happy birthday, my beautiful angel. I love you more than all the stars in the sky.
            </p>
          </div>
        </motion.div>
      </div>

      <PhotoGallery
        photos={photoData.celebrationPhotos}
        title="Celebrating You Today"
        subtitle="Beautiful moments from your special day and birthday celebrations"
        onPhotoClick={(photo) => openLightbox(photo, photoData.celebrationPhotos)}
        columns={2}
      />
    </div>
  );
};

const AboutUs = () => {
  const loveStoryMilestones = [
    {
      icon: "♥",
      title: "The Day We Met",
      description: "I still remember the moment our eyes first met. Time seemed to stop, and I knew in that instant that you were someone special. Your smile was like sunshine breaking through clouds, and your laugh became my favorite sound in the world. That day changed everything for me.",
      date: "The beginning of forever",
      image: "./assets/WhatsApp Image 2025-05-30 at 5.57.44 PM (1).jpeg"
    },
    {
      icon: "📅",
      title: "Our First Date",
      description: "Nervous butterflies, endless conversations, and the realization that I could talk to you for hours and never get bored. That first date was magical—not because of where we went, but because of how comfortable and happy you made me feel. I knew I wanted many more evenings like that one.",
      date: "The night that sealed our fate",
      image: "./assets/WhatsApp Image 2025-05-30 at 5.58.04 PM (1).jpeg"
    },
    {
      icon: "∞",
      title: "Becoming Official",
      description: "The moment we decided to make it official was one of the happiest days of my life. No more wondering, no more uncertainty—just the beautiful commitment to explore this incredible connection together. You said yes to being mine, and I've been grateful every day since.",
      date: "The start of our official journey",
      image: "./assets/WhatsApp Image 2025-05-30 at 5.58.07 PM.jpeg"
    }
  ];

  const specialQualities = [
    {
      icon: "😄",
      title: "We Laugh Together",
      description: "Your sense of humor is one of the things I love most about you. We can turn even the most ordinary moments into something fun and memorable."
    },
    {
      icon: "👥",
      title: "We Support Each Other",
      description: "Through every challenge and every dream, we're each other's biggest cheerleaders. Your support gives me strength I never knew I had."
    },
    {
      icon: "📍",
      title: "We Adventure Together",
      description: "Every adventure is better with you by my side. Whether we're exploring new places or finding magic in familiar ones, you make every moment special."
    },
    {
      icon: "⭐",
      title: "We Love Deeply",
      description: "Our love grows stronger every day. It's in the big gestures and the little moments, in the way you look at me and the way you make me feel completely loved."
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-playfair text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
            Our Love Story
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The beautiful journey of two hearts finding their home in each other
          </p>
        </motion.div>

        <div className="space-y-12 mb-16">
          {loveStoryMilestones.map((milestone, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <div className="flex items-center space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 romantic-gradient rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white text-2xl">{milestone.icon}</span>
                  </div>
                </div>
                <div className="flex-1 shadow-lg border border-pink-200/50 rounded-lg bg-white">
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:space-x-6">
                      <div className="flex-1 mb-4 md:mb-0">
                        <h3 className="font-playfair text-xl font-semibold text-gray-800 mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-2">
                          {milestone.description}
                        </p>
                        <p className="text-sm text-pink-600 font-medium">
                          {milestone.date}
                        </p>
                      </div>
                      <div className="flex-shrink-0">
                        <img
                          src={milestone.image}
                          alt={milestone.title}
                          className="w-32 h-24 md:w-48 md:h-32 object-cover rounded-xl shadow-md"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-3xl p-8 mb-16 border border-pink-200/50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8">
            What Makes Us Special
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {specialQualities.map((quality, index) => (
              <motion.div
                key={index}
                className="h-full shadow-lg border-0 rounded-lg bg-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-10 h-10 romantic-gradient rounded-full flex items-center justify-center">
                      <span className="text-white text-lg">{quality.icon}</span>
                    </div>
                    <h3 className="font-playfair text-lg font-semibold text-gray-800">
                      {quality.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {quality.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="romantic-gradient text-white shadow-xl border-0 rounded-lg">
            <div className="p-8">
              <span className="text-4xl mb-4 block">♥</span>
              <h2 className="font-playfair text-2xl sm:text-3xl font-bold mb-6">
                Our Future Together
              </h2>
              <p className="text-lg opacity-90 max-w-3xl mx-auto leading-relaxed">
                As we celebrate your birthday today, I'm not just thinking about all the wonderful memories we've already created—I'm excited about all the birthdays yet to come. I can't wait to continue growing with you, building dreams together, and creating a love story that gets more beautiful with each passing year. Here's to forever with you, my love.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    // Start auto emojis when page loads
    setTimeout(startAutoLoveEmojis, 3000);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case "wishes":
        return <BirthdayWishes />;
      case "about":
        return <AboutUs />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
      <PhotoLightbox />
      <LoveReactionPanel />
    </div>
  );
}

export default App;