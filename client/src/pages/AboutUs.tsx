import { motion } from "framer-motion";
import { Heart, Calendar, Infinity, Laugh, Users, MapPin, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import soloImage1 from "@assets/WhatsApp Image 2025-05-30 at 5.57.44 PM (1).jpeg";
import coupleImage1 from "@assets/WhatsApp Image 2025-05-30 at 5.58.04 PM (1).jpeg";
import coupleImage3 from "@assets/WhatsApp Image 2025-05-30 at 5.58.07 PM.jpeg";

const loveStoryMilestones = [
  {
    icon: Heart,
    title: "The Day We Met",
    description: "I still remember the moment our eyes first met. Time seemed to stop, and I knew in that instant that you were someone special. Your smile was like sunshine breaking through clouds, and your laugh became my favorite sound in the world. That day changed everything for me.",
    date: "The beginning of forever",
    image: soloImage1
  },
  {
    icon: Calendar,
    title: "Our First Date",
    description: "Nervous butterflies, endless conversations, and the realization that I could talk to you for hours and never get bored. That first date was magical—not because of where we went, but because of how comfortable and happy you made me feel. I knew I wanted many more evenings like that one.",
    date: "The night that sealed our fate",
    image: coupleImage1
  },
  {
    icon: Infinity,
    title: "Becoming Official",
    description: "The moment we decided to make it official was one of the happiest days of my life. No more wondering, no more uncertainty—just the beautiful commitment to explore this incredible connection together. You said yes to being mine, and I've been grateful every day since.",
    date: "The start of our official journey",
    image: coupleImage3
  }
];

const specialQualities = [
  {
    icon: Laugh,
    title: "We Laugh Together",
    description: "Your sense of humor is one of the things I love most about you. We can turn even the most ordinary moments into something fun and memorable."
  },
  {
    icon: Users,
    title: "We Support Each Other",
    description: "Through every challenge and every dream, we're each other's biggest cheerleaders. Your support gives me strength I never knew I had."
  },
  {
    icon: MapPin,
    title: "We Adventure Together",
    description: "Every adventure is better with you by my side. Whether we're exploring new places or finding magic in familiar ones, you make every moment special."
  },
  {
    icon: Star,
    title: "We Love Deeply",
    description: "Our love grows stronger every day. It's in the big gestures and the little moments, in the way you look at me and the way you make me feel completely loved."
  }
];

export default function AboutUs() {
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
            Our Love Story
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The beautiful journey of two hearts finding their home in each other
          </p>
        </motion.div>

        {/* Love Story Timeline */}
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
                    <milestone.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <Card className="flex-1 shadow-lg border border-pink-200/50">
                  <CardContent className="p-6">
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
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>

        {/* What Makes Us Special */}
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
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Card className="h-full shadow-lg border-0">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-10 h-10 romantic-gradient rounded-full flex items-center justify-center">
                        <quality.icon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="font-playfair text-lg font-semibold text-gray-800">
                        {quality.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {quality.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Future Together */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Card className="romantic-gradient text-white shadow-xl border-0">
            <CardContent className="p-8">
              <Heart className="w-12 h-12 mx-auto mb-4 text-white" />
              <h2 className="font-playfair text-2xl sm:text-3xl font-bold mb-6">
                Our Future Together
              </h2>
              <p className="text-lg opacity-90 max-w-3xl mx-auto leading-relaxed">
                As we celebrate your birthday today, I'm not just thinking about all the wonderful memories we've already created—I'm excited about all the birthdays yet to come. I can't wait to continue growing with you, building dreams together, and creating a love story that gets more beautiful with each passing year. Here's to forever with you, my love.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
