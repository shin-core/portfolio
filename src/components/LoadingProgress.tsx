'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

NProgress.configure({ 
  showSpinner: false, 
  minimum: 0.2,
  easing: 'ease',
  speed: 500
});

export default function LoadingProgress() {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    NProgress.start();

    const timer = setTimeout(() => {
      NProgress.done();
      setTimeout(() => setIsLoading(false), 300);
    }, 100);

    return () => {
      clearTimeout(timer);
      NProgress.done();
      setIsLoading(false);
    };
  }, [pathname]);

  return (
    <>
      <style jsx global>{`
        #nprogress {
          pointer-events: none;
        }
        
        #nprogress .bar {
          background: linear-gradient(90deg, 
            #3b82f6 0%, 
            #6366f1 25%, 
            #8b5cf6 50%, 
            #a855f7 75%, 
            #ec4899 100%);
          background-size: 300% 100%;
          animation: gradientFlow 2s ease infinite, shimmer 3s ease-in-out infinite;
          height: 4px;
          box-shadow: 
            0 0 10px rgba(59, 130, 246, 0.6),
            0 0 20px rgba(139, 92, 246, 0.4),
            0 0 30px rgba(236, 72, 153, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
          position: fixed;
          z-index: 9999;
          top: 0;
          left: 0;
          transform-origin: left;
          animation: gradientFlow 2s ease infinite, shimmer 3s ease-in-out infinite, wave 4s ease-in-out infinite;
        }
        
        @keyframes gradientFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes shimmer {
          0%, 100% { 
            box-shadow: 
              0 0 10px rgba(59, 130, 246, 0.6),
              0 0 20px rgba(139, 92, 246, 0.4),
              0 0 30px rgba(236, 72, 153, 0.3);
          }
          50% { 
            box-shadow: 
              0 0 20px rgba(59, 130, 246, 0.8),
              0 0 40px rgba(139, 92, 246, 0.6),
              0 0 60px rgba(236, 72, 153, 0.5);
          }
        }

        @keyframes wave {
          0%, 100% { 
            transform: scaleY(1);
          }
          50% { 
            transform: scaleY(1.2);
          }
        }

        #nprogress .peg {
          display: block;
          position: absolute;
          right: 0px;
          width: 120px;
          height: 100%;
          background: linear-gradient(90deg, 
            transparent, 
            rgba(59, 130, 246, 0.8), 
            rgba(139, 92, 246, 0.9),
            rgba(236, 72, 153, 1));
          box-shadow: 
            0 0 20px rgba(59, 130, 246, 0.9),
            0 0 40px rgba(139, 92, 246, 0.7),
            0 0 60px rgba(236, 72, 153, 0.5);
          opacity: 1;
          transform: rotate(3deg) translate(0px, -4px);
          animation: pegGlow 2s ease-in-out infinite, pegPulse 1.5s ease-in-out infinite;
        }

        @keyframes pegGlow {
          0%, 100% { 
            box-shadow: 
              0 0 20px rgba(59, 130, 246, 0.9),
              0 0 40px rgba(139, 92, 246, 0.7),
              0 0 60px rgba(236, 72, 153, 0.5);
            opacity: 1;
          }
          50% { 
            box-shadow: 
              0 0 30px rgba(59, 130, 246, 1),
              0 0 60px rgba(139, 92, 246, 0.9),
              0 0 90px rgba(236, 72, 153, 0.7);
            opacity: 0.9;
          }
        }

        @keyframes pegPulse {
          0%, 100% { 
            transform: rotate(3deg) translate(0px, -4px) scale(1);
          }
          50% { 
            transform: rotate(3deg) translate(0px, -4px) scale(1.1);
          }
        }

        /* Animated particles effect */
        #nprogress::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, 
            transparent,
            rgba(255, 255, 255, 0.4),
            transparent);
          animation: particleMove 2s linear infinite;
          pointer-events: none;
        }

        @keyframes particleMove {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100vw); }
        }
      `}</style>

      {isLoading && (
        <div className="fixed inset-0 z-[9998] pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-purple-50/40 to-pink-50/40 dark:from-gray-900/40 dark:via-gray-800/40 backdrop-blur-sm transition-opacity duration-300 animate-pulse" />
          {/* Animated waves */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[wave_3s_ease-in-out_infinite]" />
        </div>
      )}
    </>
  );
}
