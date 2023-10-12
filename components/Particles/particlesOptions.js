export const heroOptions = {
    autoPlay: true,
  
    fullScreen: {
      enable: false,
      zIndex: 0,
    },
  
    detectRetina: true,
    fpsLimit: 120,
  
    interactivity: {
      detectsOn: "#hero",
      events: {
        onDiv: [
          {
            selectors: "#repulse-div",
            enable: true,
            mode: "bounce",
            type: "circle",
          },
          {
            selectors: "#repulse-div",
            enable: true,
            mode: "repulse",
            type: "circle",
          },
          {
            selectors: "#repulse-span",
            enable: true,
            mode: "repulse",
            type: "circle",
          },
          {
            selectors: "#repulse-span",
            enable: true,
            mode: "bounce",
            type: "circle",
          },
          {
            selectors: "#togglebutton",
            enable: true,
            mode: "repulse",
            type: "circle",
          },
          {
            selectors: "#togglebutton",
            enable: true,
            mode: "bounce",
            type: "circle",
          },
          {
            selectors: "#scroller",
            enable: true,
            mode: "repulse",
            type: "circle",
          },
          {
            selectors: "#scroller",
            enable: true,
            mode: "bounce",
            type: "circle",
          },
        ],
  
        onHover: {
          enable: true,
          mode: "bubble",
          parallax: {
            enable: true,
            force: 350,
            smooth: 20,
          },
        },
        resize: {
          delay: 0.5,
          enable: true,
        },
      },
  
      modes: {
        bounce: {
          distance: 100,
        },
        bubble: {
          distance: 100,
          duration: 0.4,
          size: 40,
          color: {
            value: "#cbbde5",
          },
          opacity: 8,
          mix: false,
        },
  
        repulse: {
          distance: 200,
          factor: 200,
          speed: 1,
          maxSpeed: 50,
        },
      },
    },
  
    particles: {
      collisions: {
        enable: true,
        mode: "bounce",
      },
      color: {
        value: "#fff",
      },
      move: {
        angle: {
          offset: 0,
          value: 30,
        },
        center: {
          x: 50,
          y: 50,
          mode: "percent",
          radius: 0,
        },
        direction: ["top-left", "bottom-left", "bottom-right", "top-right"],
        drift: 0,
        enable: true,
        random: false,
        size: false,
        speed: 0.8,
        outMode: "bounce",
      },
      number: {
        limit: 0,
        value: 30,
      },
  
      opacity: {
        random: {
          enable: true,
          minimumValue: 0.4,
          maxValue: 0.9,
        },
        value: 0.6,
        animation: {
          count: 0,
          enable: true,
          speed: 0.2,
          decay: 0,
          sync: true,
          destroy: "none",
          startValue: "random",
        },
      },
  
      shape: {
        type: "image",
        image:
        [
          {
            src: "/web particles/next.webp", 
            width: 100,
            height: 100,
            },
            {
              src: "/web particles/react.webp", 
              width: 100,
              height: 100,
              },
            {
              src: "/web particles/bootstrap.webp", 
              width: 100,
              height: 100,
              },
          {
            src: "/web particles/firebase.webp", 
            width: 100,
            height: 100,
            },
          {
            src: "/web particles/ts.webp", 
            width: 100,
            height: 100,
            },
          {
            src: "/web particles/md.webp", 
            width: 100,
            height: 100,
            },
            {
              src: "/web particles/html5.webp", 
              width: 100,
              height: 100,
              },
          {
            src: "/web particles/nodejs.webp", 
            width: 100,
            height: 100,
            },
            {
              src: "/web particles/js.webp", 
              width: 100,
              height: 100,
              },
          {
            src: "/web particles/git.webp", 
            width: 100,
            height: 100,
            },
            {
              src: "/web particles/gh.webp", 
              width: 100,
              height: 100,
              },
          {
            src: "/web particles/db.webp", 
            width: 100,
            height: 100,
            },
          {
            src: "/web particles/py.webp", 
            width: 100,
            height: 100,
            },
            {
              src: "/web particles/tailwind.webp", 
              width: 100,
              height: 100,
              },
          {
            src: "/web particles/scraping.webp", 
            width: 100,
            height: 100,
            },
          
        ],
        
      },
  























      size: {
        random: {
          enable: true,
          minimumValue: 25,
          maxValue: 35,
        },
        animation: {
          count: 0,
          enable: true,
          speed: 0.2,
          decay: 0,
          sync: true,
          destroy: "none",
          startValue: "random",
        },
      },
  
      lineLinked: {
        blink: false,
        color: {
          value: "#ffffff",
        },
        consent: true,
        distance: 100,
        enable: true,
        frequency: 10,
        opacity: 0.4,
        width: 1,
      },
    },
    pauseOnBlur: true,
    pauseOnOutsideViewport: true,
    smooth: true,
  };