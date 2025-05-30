// Photo data structure for the romantic birthday website
import soloImage1 from "@assets/WhatsApp Image 2025-05-30 at 5.57.44 PM (1).jpeg";
import soloImage2 from "@assets/WhatsApp Image 2025-05-30 at 5.57.45 PM.jpeg";
import soloImage3 from "@assets/WhatsApp Image 2025-05-30 at 5.57.46 PM.jpeg";
import soloImage4 from "@assets/WhatsApp Image 2025-05-30 at 5.57.52 PM.jpeg";
import soloImage5 from "@assets/WhatsApp Image 2025-05-30 at 5.59.53 PM (1).jpeg";
import soloImage6 from "@assets/WhatsApp Image 2025-05-30 at 5.59.54 PM.jpeg";

import coupleImage1 from "@assets/WhatsApp Image 2025-05-30 at 5.58.04 PM (1).jpeg";
import coupleImage2 from "@assets/WhatsApp Image 2025-05-30 at 5.58.05 PM (1).jpeg";
import coupleImage3 from "@assets/WhatsApp Image 2025-05-30 at 5.58.07 PM.jpeg";
import coupleImage4 from "@assets/WhatsApp Image 2025-05-30 at 5.58.07 PM (1).jpeg";
import coupleImage5 from "@assets/WhatsApp Image 2025-05-30 at 5.58.08 PM (1).jpeg";
import coupleImage6 from "@assets/WhatsApp Image 2025-05-30 at 5.58.09 PM.jpeg";

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
    src: soloImage5,
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
  }
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
    id: "couple-2", 
    src: coupleImage2,
    alt: "Happy couple laughing",
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
  {
    id: "couple-6",
    src: coupleImage6,
    alt: "Romantic couple embrace",
    category: "couple",
    type: "image"
  }
];

export const celebrationPhotos: Photo[] = [
  {
    id: "celebration-1", 
    src: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Birthday celebration",
    category: "celebration"
  },
  {
    id: "celebration-2",
    src: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600", 
    alt: "Beautiful birthday cake",
    category: "celebration"
  },
  {
    id: "celebration-3",
    src: "https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Birthday surprise",
    category: "celebration"
  },
  {
    id: "celebration-4",
    src: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Birthday flowers", 
    category: "celebration"
  }
];

export const heroPhoto: Photo = {
  id: "hero",
  src: soloImage2,
  alt: "Beautiful hero portrait",
  category: "solo"
};
