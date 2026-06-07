'use client';

import { type ReactNode } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

type ParallaxSectionProps = {
  src: string;
  alt: string;
  children: ReactNode;
  speed?: number;
  overlay?: boolean;
  className?: string;
  priority?: boolean;
};

export function ParallaxSection({
  src,
  alt,
  children,
  speed = 0.3,
  overlay = true,
  className = '',
  priority = false,
}: ParallaxSectionProps) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, Math.round(1000 * speed)]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-center"
          priority={priority}
          sizes="100vw"
          quality={85}
        />
      </motion.div>
      {overlay && (
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
