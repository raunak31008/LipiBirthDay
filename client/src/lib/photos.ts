// Photo data structure for the romantic birthday website
// In a real implementation, these would be replaced with actual photos

export interface Photo {
  id: string;
  src: string;
  alt: string;
  category: 'solo' | 'couple' | 'celebration';
}

export const soloPhotos: Photo[] = [
  {
    id: "solo-1",
    src: "/attached_assets/WhatsApp Image 2025-05-30 at 5.57.44 PM (1).jpeg",
    alt: "Beautiful portrait",
    category: "solo"
  },
  {
    id: "solo-2", 
    src: "/attached_assets/WhatsApp Image 2025-05-30 at 5.57.45 PM.jpeg",
    alt: "Elegant portrait",
    category: "solo"
  },
  {
    id: "solo-3",
    src: "/attached_assets/WhatsApp Image 2025-05-30 at 5.57.46 PM.jpeg", 
    alt: "Natural beauty portrait",
    category: "solo"
  },
  {
    id: "solo-4",
    src: "/attached_assets/WhatsApp Image 2025-05-30 at 5.57.52 PM.jpeg",
    alt: "Radiant smile portrait", 
    category: "solo"
  },
  {
    id: "solo-5",
    src: "/attached_assets/WhatsApp Image 2025-05-30 at 5.59.53 PM (1).jpeg",
    alt: "Gorgeous moment", 
    category: "solo"
  },
  {
    id: "solo-6",
    src: "/attached_assets/WhatsApp Image 2025-05-30 at 5.59.54 PM.jpeg",
    alt: "Stunning beauty", 
    category: "solo"
  }
];

export const couplePhotos: Photo[] = [
  {
    id: "couple-1",
    src: "/attached_assets/WhatsApp Image 2025-05-30 at 5.58.04 PM (1).jpeg",
    alt: "Romantic couple moment",
    category: "couple"
  },
  {
    id: "couple-2", 
    src: "/attached_assets/WhatsApp Image 2025-05-30 at 5.58.05 PM (1).jpeg",
    alt: "Happy couple laughing",
    category: "couple"
  },
  {
    id: "couple-3",
    src: "/attached_assets/WhatsApp Image 2025-05-30 at 5.58.07 PM.jpeg",
    alt: "Intimate couple moment", 
    category: "couple"
  },
  {
    id: "couple-4",
    src: "/attached_assets/WhatsApp Image 2025-05-30 at 5.58.07 PM (1).jpeg",
    alt: "Couple walking together",
    category: "couple"
  },
  {
    id: "couple-5",
    src: "/attached_assets/WhatsApp Image 2025-05-30 at 5.58.08 PM (1).jpeg",
    alt: "Tender couple moment",
    category: "couple"
  },
  {
    id: "couple-6",
    src: "/attached_assets/WhatsApp Image 2025-05-30 at 5.58.09 PM.jpeg",
    alt: "Romantic couple embrace",
    category: "couple"
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
  src: "/attached_assets/WhatsApp Image 2025-05-30 at 5.57.45 PM.jpeg",
  alt: "Beautiful hero portrait",
  category: "solo"
};
