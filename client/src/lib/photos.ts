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
    src: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000",
    alt: "Beautiful portrait",
    category: "solo"
  },
  {
    id: "solo-2", 
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000",
    alt: "Elegant portrait",
    category: "solo"
  },
  {
    id: "solo-3",
    src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000", 
    alt: "Natural beauty portrait",
    category: "solo"
  },
  {
    id: "solo-4",
    src: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000",
    alt: "Radiant smile portrait", 
    category: "solo"
  }
];

export const couplePhotos: Photo[] = [
  {
    id: "couple-1",
    src: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=600",
    alt: "Romantic couple moment",
    category: "couple"
  },
  {
    id: "couple-2", 
    src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=600",
    alt: "Happy couple laughing",
    category: "couple"
  },
  {
    id: "couple-3",
    src: "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=600",
    alt: "Intimate couple moment", 
    category: "couple"
  },
  {
    id: "couple-4",
    src: "https://images.unsplash.com/photo-1542596768-5d1d21f1cf98?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=600",
    alt: "Couple walking together",
    category: "couple"
  },
  {
    id: "couple-5",
    src: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=600",
    alt: "Tender couple moment",
    category: "couple"
  },
  {
    id: "couple-6",
    src: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=600",
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
  src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
  alt: "Beautiful hero portrait",
  category: "solo"
};
