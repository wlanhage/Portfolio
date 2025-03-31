import React, { useState, useEffect, useRef } from 'react';
import { motion } from "framer-motion";

interface TrailPoint {
  x: number;
  y: number;
  timestamp: number;
}

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile or touch-based
    const checkMobile = () => {
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isSmallScreen = window.innerWidth <= 768;
      setIsMobile(isTouchDevice || isSmallScreen);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);
  
  // Create and apply global CSS to hide default cursor on hover elements
  useEffect(() => {
    if (isMobile) return;
    
    // Create a style element
    const styleEl = document.createElement('style');
    
    // Define CSS to hide cursor on hover elements
    const css = `
      a, button, [role="button"], .cursor-pointer, input[type="submit"], input[type="button"], input[type="reset"] {
        cursor: none !important;
      }
    `;
    
    styleEl.appendChild(document.createTextNode(css));
    document.head.appendChild(styleEl);
    
    return () => {
      // Cleanup - remove the style element when component unmounts
      document.head.removeChild(styleEl);
    };
  }, [isMobile]);
  
  useEffect(() => {
    if (isMobile) return; // Skip all event listeners on mobile devices
    
    const addEventListeners = () => {
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseenter', onMouseEnter);
      document.addEventListener('mouseleave', onMouseLeave);
      document.addEventListener('mousedown', onMouseDown);
      document.addEventListener('mouseup', onMouseUp);
    };

    const removeEventListeners = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
    };

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseEnter = () => {
      setHidden(false);
    };

    const onMouseLeave = () => {
      setHidden(true);
    };

    const onMouseDown = () => {
      setClicked(true);
    };

    const onMouseUp = () => {
      setClicked(false);
    };

    // Add event listeners when component mounts
    addEventListeners();

    // Effect for cursor change on links
    const handleLinkHoverEvents = () => {
      document.querySelectorAll('a, button, [role="button"], .cursor-pointer')
        .forEach(el => {
          el.addEventListener('mouseenter', () => setLinkHovered(true));
          el.addEventListener('mouseleave', () => setLinkHovered(false));
        });
    };

    handleLinkHoverEvents();

    // Clean up event listeners when component unmounts
    return () => {
      removeEventListeners();
    };
  }, [isMobile]);

  // Hide default cursor
  useEffect(() => {
    if (isMobile) {
      document.body.style.cursor = 'auto';
      return;
    }
    
    document.body.style.cursor = 'none';
    
    return () => {
      document.body.style.cursor = 'auto';
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <>
      <motion.div
        className="cursor-dot"
        style={{
          position: 'fixed',
          left: position.x,
          top: position.y,
          width: clicked ? 12 : linkHovered ? 24 : 16,
          height: clicked ? 12 : linkHovered ? 24 : 16,
          backgroundColor: linkHovered ? 'rgba(255, 165, 0, 0.5)' : 'rgba(255, 255, 255, 0.5)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          transform: 'translate(-50%, -50%)',
          mixBlendMode: 'difference',
        }}
        animate={{
          width: clicked ? 12 : linkHovered ? 24 : 16,
          height: clicked ? 12 : linkHovered ? 24 : 16,
          opacity: hidden ? 0 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 150,
          damping: 15,
          mass: 0.1
        }}
      />
      <motion.div
        className="cursor-ring"
        style={{
          position: 'fixed',
          left: position.x,
          top: position.y,
          width: clicked ? 24 : linkHovered ? 48 : 32,
          height: clicked ? 24 : linkHovered ? 48 : 32,
          border: `2px solid ${linkHovered ? 'rgba(255, 165, 0, 0.5)' : 'rgba(255, 255, 255, 0.5)'}`,
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9998,
          transform: 'translate(-50%, -50%)',
          mixBlendMode: 'difference',
        }}
        animate={{
          width: clicked ? 24 : linkHovered ? 48 : 32,
          height: clicked ? 24 : linkHovered ? 48 : 32,
          opacity: hidden ? 0 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 20,
          mass: 0.2,
          delay: 0.03,
        }}
      />
    </>
  );
};

export const CursorTrail: React.FC = () => {
  const [trail, setTrail] = useState<TrailPoint[]>([]);
  const trailLength = 30; 
  const [isMobile, setIsMobile] = useState(false);
  const [isMoving, setIsMoving] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isSmallScreen = window.innerWidth <= 768;
      setIsMobile(isTouchDevice || isSmallScreen);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  useEffect(() => {
    if (isMobile) return; // Skip on mobile
    
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      
      setIsMoving(true);
      
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      
      timeoutRef.current = setTimeout(() => {
        setIsMoving(false);
      }, 100);
      
      setTrail(prev => {
        const newTrail = [{ x: clientX, y: clientY, timestamp: Date.now() }, ...prev];
        return newTrail.slice(0, trailLength);
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <>
      {trail.map((point, index) => (
        <motion.div
          key={index}
          style={{
            position: 'fixed',
            left: point.x,
            top: point.y,
            width: 4 + (trailLength - index) / 5,
            height: 4 + (trailLength - index) / 5,
            backgroundColor: `rgba(255, 165, 0, ${0.5 - index * 0.02})`,
            borderRadius: '50%',
            pointerEvents: 'none',
            zIndex: 9997,
            transform: 'translate(-50%, -50%)',
          }}
          animate={{
            opacity: isMoving ? 0.7 - (index * 0.015) : 0
          }}
          transition={{
            opacity: { duration: 0.5, ease: "easeOut" }
          }}
        />
      ))}
    </>
  );
};

export const Cursor: React.FC = () => {
  return (
    <>
      <CustomCursor />
      <CursorTrail />
    </>
  );
};

export default Cursor; 