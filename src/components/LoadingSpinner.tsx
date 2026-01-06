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
    sm: 'w-6 h-6',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  };

  const spinner = (
    <div className={`${fullScreen ? 'fixed inset-0 z-[9999] flex items-center justify-center bg-white/80 dark:bg-black/80 backdrop-blur-sm' : 'flex flex-col items-center justify-center'}`}>
      <div className="relative">
        {/* Outer spinning ring */}
        <div className={`${sizeClasses[size]} border-4 border-blue-200 dark:border-blue-900 rounded-full animate-spin`} style={{
          borderTopColor: '#3b82f6',
          borderRightColor: '#8b5cf6',
          borderBottomColor: '#ec4899',
          borderLeftColor: 'transparent',
        }} />
        
        {/* Inner pulsing circle */}
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${size === 'sm' ? 'w-2 h-2' : size === 'md' ? 'w-3 h-3' : 'w-4 h-4'} bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse`} />
      </div>
      
      {text && (
        <p className="mt-4 text-gray-600 dark:text-gray-400 font-medium animate-pulse">
          {text}
        </p>
      )}
    </div>
  );

  return spinner;
}

