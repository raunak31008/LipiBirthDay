// Photo data structure for the romantic birthday website
import soloImage1 from "@assets/WhatsApp Image 2025-05-30 at 5.57.44 PM (1).jpeg";
import soloImage2 from "@assets/WhatsApp Image 2025-05-30 at 5.57.45 PM.jpeg";
import soloImage3 from "@assets/WhatsApp Image 2025-05-30 at 5.57.46 PM.jpeg";
import soloImage4 from "@assets/WhatsApp Image 2025-05-30 at 5.57.52 PM.jpeg";
import soloImage5 from "@assets/WhatsApp Image 2025-05-30 at 5.59.53 PM (1).jpeg";
import soloImage6 from "@assets/WhatsApp Image 2025-05-30 at 5.59.54 PM.jpeg";
import soloImage7 from "@assets/WhatsApp Image 2025-05-30 at 5.57.43 PM.jpeg";
import soloImage8 from "@assets/WhatsApp Image 2025-05-30 at 5.57.44 PM (2).jpeg";
import soloImage9 from "@assets/WhatsApp Image 2025-05-30 at 5.59.46 PM (1).jpeg";
import soloImage10 from "@assets/WhatsApp Image 2025-05-30 at 5.59.46 PM (2).jpeg";
import soloImage11 from "@assets/WhatsApp Image 2025-05-30 at 5.59.52 PM.jpeg";
import soloImage12 from "@assets/04f609b0-44d6-41e2-b07a-0eb55ae21c12.jpeg";

import coupleImage1 from "@assets/WhatsApp Image 2025-05-30 at 5.58.04 PM (1).jpeg";
import coupleImage2 from "@assets/WhatsApp Image 2025-05-30 at 5.58.05 PM (1).jpeg";
import coupleImage3 from "@assets/WhatsApp Image 2025-05-30 at 5.58.07 PM.jpeg";
import coupleImage4 from "@assets/WhatsApp Image 2025-05-30 at 5.58.07 PM (1).jpeg";
import coupleImage5 from "@assets/WhatsApp Image 2025-05-30 at 5.58.08 PM (1).jpeg";
import coupleImage6 from "@assets/WhatsApp Image 2025-05-30 at 5.58.09 PM.jpeg";

import soloVideo1 from "@assets/WhatsApp Video 2025-05-30 at 5.57.47 PM.mp4";
import soloVideo2 from "@assets/WhatsApp Video 2025-05-30 at 5.57.49 PM (1).mp4";
import soloVideo3 from "@assets/WhatsApp Video 2025-05-30 at 5.57.55 PM.mp4";

import coupleVideo1 from "@assets/WhatsApp Video 2025-05-30 at 5.58.00 PM.mp4";
import coupleVideo2 from "@assets/WhatsApp Video 2025-05-30 at 5.58.03 PM.mp4";
import coupleVideo3 from "@assets/WhatsApp Video 2025-05-30 at 5.58.10 PM.mp4";

import celebrationVideo1 from "@assets/WhatsApp Video 2025-05-30 at 5.59.50 PM.mp4";

export interface Photo {
  id: string;
  src: string;
  alt: string;
  category: 'solo' | 'couple' | 'celebration';
  type?: 'image' | 'video';
}

export const soloPhotos: Photo[] = [
  {
    id: "solo-1",
    src: soloImage1,
    alt: "Beautiful portrait",
    category: "solo",
    type: "image"
  },
  {
    id: "solo-2", 
    src: soloImage2,
    alt: "Elegant portrait",
    category: "solo",
    type: "image"
  },
  {
    id: "solo-3",
    src: soloImage3, 
    alt: "Natural beauty portrait",
    category: "solo",
    type: "image"
  },
  {
    id: "solo-4",
    src: soloImage4,
    alt: "Radiant smile portrait", 
    category: "solo",
    type: "image"
  },
  {
    id: "solo-5",
    src: coupleImage2,
    alt: "Gorgeous moment", 
    category: "solo",
    type: "image"
  },
  {
    id: "solo-6",
    src: soloImage6,
    alt: "Stunning beauty", 
    category: "solo",
    type: "image"
  },
  {
    id: "solo-11",
    src: soloImage11,
    alt: "Radiant beauty", 
    category: "solo",
    type: "image"
  },
  {
    id: "solo-12",
    src: soloImage12,
    alt: "Perfect moment", 
    category: "solo",
    type: "image"
  },
  {
    id: "solo-video-2",
    src: soloVideo2,
    alt: "Sweet video",
    category: "solo",
    type: "video"
  },
];

export const couplePhotos: Photo[] = [
  {
    id: "couple-1",
    src: coupleImage1,
    alt: "Romantic couple moment",
    category: "couple",
    type: "image"
  },
  {
    id: "couple-3",
    src: coupleImage3,
    alt: "Intimate couple moment", 
    category: "couple",
    type: "image"
  },
  {
    id: "couple-4",
    src: coupleImage4,
    alt: "Couple walking together",
    category: "couple",
    type: "image"
  },
  {
    id: "couple-5",
    src: coupleImage5,
    alt: "Tender couple moment",
    category: "couple",
    type: "image"
  },
];

export const celebrationPhotos: Photo[] = [
  {
    id: "solo-video-3",
    src: soloVideo3,
    alt: "Lovely video moment",
    category: "solo",
    type: "video"
  },
  {
    id: "celebration-video-1",
    src: celebrationVideo1,
    alt: "Special birthday video moment",
    category: "celebration",
    type: "video"
  },
  {
    id: "solo-video-1",
    src: soloVideo1,
    alt: "Beautiful video moment",
    category: "solo",
    type: "video"
  },
];

export const heroPhoto: Photo = {
  id: "hero",
  src: soloImage2,
  alt: "Beautiful hero portrait",
  category: "solo"
};
