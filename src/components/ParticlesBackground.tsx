import React, { useEffect, useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';

// Declare particles.js
declare global {
  interface Window {
    particlesJS: any;
  }
}

const ParticlesBackground: React.FC = () => {
  const { isDark } = useTheme();
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadParticles = async () => {
      if (!window.particlesJS) {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
        document.head.appendChild(script);

        await new Promise((resolve) => {
          script.onload = resolve;
        });
      }

      if (window.particlesJS && particlesRef.current) {
        window.particlesJS('particles-js', {
          particles: {
            number: {
              value: 100,
              density: {
                enable: true,
                value_area: 800
              }
            },
            color: {
              value: ['#00ffff', '#ff00ff', '#39ff14', '#ff6600', '#00ccff']
            },
            shape: {
              type: ['circle', 'triangle', 'polygon', 'star'],
              stroke: {
                width: 0,
                color: '#000000'
              }
            },
            opacity: {
              value: 0.7,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
              }
            },
            size: {
              value: 4,
              random: true,
              anim: {
                enable: true,
                speed: 5,
                size_min: 0.3,
                sync: false
              }
            },
            line_linked: {
              enable: true,
              distance: 130,
              color: isDark ? '#6366f1' : '#8b5cf6',
              opacity: 0.3,
              width: 1
            },
            move: {
              enable: true,
              speed: 2,
              direction: 'none',
              random: true,
              straight: false,
              out_mode: 'out',
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
              }
            }
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              onhover: {
                enable: true,
                mode: 'grab'
              },
              onclick: {
                enable: true,
                mode: 'push'
              },
              resize: true
            },
            modes: {
              grab: {
                distance: 200,
                line_linked: {
                  opacity: 0.6
                }
              },
              bubble: {
                distance: 250,
                size: 6,
                duration: 2,
                opacity: 0.8,
                speed: 3
              },
              repulse: {
                distance: 150,
                duration: 0.4
              },
              push: {
                particles_nb: 6
              },
              remove: {
                particles_nb: 2
              }
            }
          },
          retina_detect: true
        });
      }
    };

    loadParticles();
  }, [isDark]);

  return (
    <div
      id="particles-js"
      ref={particlesRef}
      className="fixed inset-0 -z-30"
      style={{ width: '100vw', height: '100vh' }}
    />
  );
};

export default ParticlesBackground;
