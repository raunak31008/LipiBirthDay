import { motion } from "framer-motion";
import { Link } from "wouter";
import { Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import PhotoGallery from "@/components/PhotoGallery";
import { useLightbox } from "@/components/PhotoLightbox";
import { heroPhoto, soloPhotos, couplePhotos } from "@/lib/photos";

export default function Home() {
  const { openLightbox } = useLightbox();

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroPhoto.src}
            alt={heroPhoto.alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/30 to-purple-500/30" />
        </div>

        {/* Hero Content */}
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
            <Link href="/wishes">
              <Button
                size="lg"
                className="romantic-gradient text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                See Your Birthday Wishes
                <Heart className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Solo Photos Gallery */}
      <PhotoGallery
        photos={soloPhotos}
        title="Celebrating You"
        subtitle="Every photo tells a story of your incredible beauty and the joy you bring to my life"
        onPhotoClick={(photo) => openLightbox(photo, soloPhotos)}
        columns={3}
      />

      {/* Couple Photos Gallery */}
      <PhotoGallery
        photos={couplePhotos}
        title="Our Beautiful Moments"
        subtitle="Every moment with you is a treasure that I hold close to my heart"
        onPhotoClick={(photo) => openLightbox(photo, couplePhotos)}
        columns={2}
      />

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            className="romantic-gradient rounded-3xl p-8 text-white shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-playfair text-2xl sm:text-3xl font-bold mb-4">
              Ready to see more?
            </h2>
            <p className="text-lg opacity-90 mb-6">
              Explore our beautiful love story and read all the birthday wishes I have for you
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/wishes">
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Birthday Wishes
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto bg-white/10 border-white/20 text-white hover:bg-white/20"
                >
                  Our Story
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
