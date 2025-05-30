import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Love reaction system
const loveEmojis = ['💖', '💕', '💗', '💝', '😘', '🥰', '😍', '💋', '🌹', '💐', '✨', '🎀'];

const createEmojiReaction = (emoji: string, x: number, y: number) => {
  const emojiElement = document.createElement('div');
  emojiElement.textContent = emoji;
  emojiElement.className = 'emoji-reaction floating-emoji';
  emojiElement.style.left = (x + Math.random() * 100 - 50) + 'px';
  emojiElement.style.top = y + 'px';
  emojiElement.style.position = 'fixed';
  emojiElement.style.pointerEvents = 'none';
  emojiElement.style.zIndex = '9999';
  emojiElement.style.fontSize = '2rem';
  emojiElement.style.userSelect = 'none';
  
  document.body.appendChild(emojiElement);
  
  setTimeout(() => {
    if (emojiElement && emojiElement.parentNode) {
      emojiElement.parentNode.removeChild(emojiElement);
    }
  }, 3000);
};

export const triggerEmojiReaction = (emoji: string) => {
  for (let i = 0; i < 3; i++) {
    setTimeout(() => {
      const x = Math.random() * window.innerWidth;
      const y = window.innerHeight - 100;
      createEmojiReaction(emoji, x, y);
    }, i * 200);
  }
};

// Auto love emojis
export const startAutoLoveEmojis = () => {
  const interval = setInterval(() => {
    if (Math.random() < 0.3) {
      const randomEmoji = loveEmojis[Math.floor(Math.random() * loveEmojis.length)];
      const x = Math.random() * window.innerWidth;
      const y = window.innerHeight;
      createEmojiReaction(randomEmoji, x, y);
    }
  }, 5000);
  
  return () => clearInterval(interval);
};

const LoveReactionPanel = () => {
  const reactionEmojis = ['💖', '💕', '😘', '🥰', '😍', '💋', '🌹', '✨'];
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div className="fixed bottom-5 right-5 z-50">
      <div className="flex flex-col-reverse items-end gap-2">
        {isExpanded && reactionEmojis.map((emoji, index) => (
          <motion.button
            key={index}
            className="w-12 h-12 bg-white/95 backdrop-blur-md rounded-full border border-pink-200/50 shadow-lg flex items-center justify-center text-2xl hover:bg-pink-50 hover:scale-110 transition-all duration-200"
            onClick={() => {
              triggerEmojiReaction(emoji);
              setTimeout(() => triggerEmojiReaction(emoji), 300);
            }}
            title={`Send ${emoji}`}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          >
            {emoji}
          </motion.button>
        ))}
        
        <motion.button
          className="w-14 h-14 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full shadow-lg flex items-center justify-center text-2xl text-white hover:shadow-xl transition-all duration-200"
          onClick={() => setIsExpanded(!isExpanded)}
          title="Love Reactions"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          💕
        </motion.button>
      </div>
    </div>
  );
};

export default LoveReactionPanel;