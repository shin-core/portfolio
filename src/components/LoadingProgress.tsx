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
      setTimeout(() => setIsLoading(false), 200);
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
          background: linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6);
          background-size: 200% 100%;
          animation: gradientShift 3s ease infinite;
          height: 4px;
          box-shadow: 
            0 0 10px rgba(59, 130, 246, 0.6),
            0 0 20px rgba(139, 92, 246, 0.4),
            0 0 30px rgba(236, 72, 153, 0.2);
          position: fixed;
          z-index: 9999;
          top: 0;
          left: 0;
          width: 100%;
        }
        
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        #nprogress .peg {
          display: block;
          position: absolute;
          right: 0px;
          width: 100px;
          height: 100%;
          box-shadow: 
            0 0 15px rgba(59, 130, 246, 0.8),
            0 0 25px rgba(139, 92, 246, 0.6),
            0 0 35px rgba(236, 72, 153, 0.4);
          opacity: 1;
          transform: rotate(3deg) translate(0px, -4px);
          animation: glow 2s ease-in-out infinite;
        }

        @keyframes glow {
          0%, 100% { 
            box-shadow: 
              0 0 15px rgba(59, 130, 246, 0.8),
              0 0 25px rgba(139, 92, 246, 0.6),
              0 0 35px rgba(236, 72, 153, 0.4);
          }
          50% { 
            box-shadow: 
              0 0 20px rgba(59, 130, 246, 1),
              0 0 30px rgba(139, 92, 246, 0.8),
              0 0 40px rgba(236, 72, 153, 0.6);
          }
        }
      `}</style>

      {isLoading && (
        <div className="fixed inset-0 z-[9998] pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-purple-50/30 to-pink-50/30 dark:from-gray-900/30 dark:via-gray-800/30 backdrop-blur-[2px] transition-opacity duration-300" />
        </div>
      )}
    </>
  );
}
