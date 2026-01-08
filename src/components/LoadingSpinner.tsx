'use client';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  fullScreen?: boolean;
}

export default function LoadingSpinner({ 
  size = 'md', 
  text, 
  fullScreen = false 
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: { outer: 'w-6 h-6', middle: 'w-4 h-4', inner: 'w-3 h-3', dot: 'w-1.5 h-1.5' },
    md: { outer: 'w-12 h-12', middle: 'w-8 h-8', inner: 'w-6 h-6', dot: 'w-3 h-3' },
    lg: { outer: 'w-16 h-16', middle: 'w-12 h-12', inner: 'w-8 h-8', dot: 'w-4 h-4' },
  };

  const sizes = sizeClasses[size];

  return (
    <div className={`${fullScreen ? 'fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white/90 dark:bg-black/90 backdrop-blur-md' : 'flex flex-col items-center justify-center'}`}>
      <div className="relative" style={{ width: sizes.outer, height: sizes.outer }}>
        {/* Outer spinning ring - fastest */}
        <div 
          className={`${sizes.outer} border-4 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 spin-fast`}
          style={{
            borderTopColor: '#3b82f6',
            borderRightColor: 'transparent',
            borderBottomColor: 'transparent',
            borderLeftColor: 'transparent',
          }}
        />
        
        {/* Middle spinning ring - reverse */}
        <div 
          className={`${sizes.middle} border-4 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 spin-medium`}
          style={{
            borderTopColor: 'transparent',
            borderRightColor: '#8b5cf6',
            borderBottomColor: 'transparent',
            borderLeftColor: 'transparent',
          }}
        />

        {/* Inner spinning ring - slowest */}
        <div 
          className={`${sizes.inner} border-4 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 spin-slow`}
          style={{
            borderTopColor: 'transparent',
            borderRightColor: 'transparent',
            borderBottomColor: '#ec4899',
            borderLeftColor: 'transparent',
          }}
        />
        
        {/* Pulsing center dot with gradient */}
        <div 
          className={`${sizes.dot} absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pulse-glow`}
          style={{
            background: 'linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899)',
          }}
        />
      </div>
      
      {text && (
        <p className="mt-6 text-gray-600 dark:text-gray-400 font-medium text-pulse">
          {text}
        </p>
      )}
    </div>
  );
}
