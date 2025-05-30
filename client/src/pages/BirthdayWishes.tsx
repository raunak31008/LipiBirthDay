import { motion } from "framer-motion";
import { Heart, Star, Infinity, Cake, Gift, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import PhotoGallery from "@/components/PhotoGallery";
import { useLightbox } from "@/components/PhotoLightbox";
import { celebrationPhotos } from "@/lib/photos";

const birthdayMessages = [
  {
    icon: Heart,
    title: "Your Beauty Illuminates My World",
    content: "Every day I wake up grateful for the privilege of loving someone as extraordinary as you. Your smile lights up the darkest days, your laughter is the most beautiful melody I've ever heard, and your heart is the most precious gift I've ever received. On your birthday, I want you to know that you are not just beautiful on the outside, but your soul radiates a beauty that takes my breath away."
  },
  {
    icon: Star,
    title: "My Wishes for Your Special Year",
    content: "As you blow out your candles today, I wish for all your dreams to come true and for our love to grow even stronger. May this new year of your life be filled with adventures, laughter, and moments that make your heart sing. I promise to be by your side through every celebration, every challenge, and every beautiful ordinary day. You deserve all the happiness in the world, my love."
  },
  {
    icon: Infinity,
    title: "Forever and Always",
    content: "Today isn't just about celebrating your birthday—it's about celebrating the incredible woman who has transformed my life in the most beautiful ways. You've taught me what true love feels like, what it means to have a partner who supports and believes in you unconditionally. I love you more than words could ever express, and I'm excited to create many more birthday memories together. Here's to you, my beautiful angel, today and always."
  }
];

export default function BirthdayWishes() {
  const { openLightbox } = useLightbox();

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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

        {/* Birthday Countdown */}
        <motion.div
          className="romantic-gradient rounded-3xl p-8 mb-16 text-center text-white shadow-xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Cake className="w-6 h-6" />
            <h2 className="font-playfair text-2xl font-semibold">
              It's Your Special Day!
            </h2>
            <Sparkles className="w-6 h-6" />
          </div>
          <p className="text-lg opacity-90">
            Today marks another year of your beautiful existence, and I'm so grateful to celebrate it with you
          </p>
        </motion.div>

        {/* Birthday Messages */}
        <div className="space-y-12 mb-16">
          {birthdayMessages.map((message, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <Card className="shadow-lg border border-pink-200/50 overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 romantic-gradient rounded-full flex items-center justify-center">
                        <message.icon className="w-6 h-6 text-white" />
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
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Personal Birthday Message */}
        <motion.div
          className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-3xl p-8 mb-16 border border-pink-200/50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center">
            <Gift className="w-12 h-12 text-pink-600 mx-auto mb-4" />
            <h3 className="font-playfair text-2xl font-semibold text-gray-800 mb-4">
              A Special Message Just for You
            </h3>
            <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
              My dearest love, on this special day, I want you to know that you are the most incredible gift life has ever given me. Your kindness, your strength, your beautiful spirit, and your loving heart make every day brighter. I am so proud to love you and be loved by you. May this birthday be the beginning of a year filled with all the joy, love, and dreams coming true that you so richly deserve. Happy birthday, my beautiful angel. I love you more than all the stars in the sky.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Birthday Celebration Photos */}
      <PhotoGallery
        photos={celebrationPhotos}
        title="Celebrating You Today"
        subtitle="Beautiful moments from your special day and birthday celebrations"
        onPhotoClick={(photo) => openLightbox(photo, celebrationPhotos)}
        columns={2}
      />
    </div>
  );
}
