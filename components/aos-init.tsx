"use client";

import { useEffect } from "react";

export default function AOSInit() {
  useEffect(() => {
    const initAOS = async () => {
      const AOS = (await import('aos')).default;
      AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 100,
      });
    };
    
    initAOS();
  }, []);

  return null;
} 