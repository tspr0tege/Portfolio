// https://www.npmjs.com/package/ng-particles
let primaryColor = getComputedStyle(document.documentElement).getPropertyValue("--primary-color");

themeSwitch.addEventListener('change', updateParticleColor);

let particlesJSON = {
  backgroundMode: {
    enable: true,
    zIndex: -1
  },
  fpsLimit: 60,
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 700 //Denser the smaller the number.
      }
    },
    color: {
      //The color for every node, not the connecting lines.
      value: primaryColor //Or use an array of colors like ["#9b0000", "#001378", "#0b521f"]
    },
    shape: {
      type: "circle", // Can show circle, edge (a square), triangle, polygon, star, img, or an array of multiple.
      stroke: {
        //The border
        width: 1,
        color: primaryColor
      },
      polygon: {
        //if the shape is a polygon
        nb_sides: 5
      }
    },
    opacity: {
      value: 0.3,
      random: true
    },
    size: {
      value: 3,
      random: true
    },
    line_linked: {
      enable: true,
      distance: 200, //The radius before a line is added, the lower the number the more lines.
      color: primaryColor,
      opacity: 0.2,
      width: 2
    },
    move: {
      enable: true,
      speed: 2,
      direction: "top", //Move them off the canvas, either "none", "top", "right", "bottom", "left", "top-right", "bottom-right" et cetera...
      random: true,
      straight: false, //Whether they'll shift left and right while moving.
      out_mode: "out", //What it'll do when it reaches the end of the canvas, either "out" or "bounce".
      bounce: false,
      attract: {
        //Make them start to clump together while moving.
        enable: true,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  //Negate the default interactivity
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false,
        mode: "repulse"
      },
      onclick: {
        enable: false,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 800,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 800,
        size: 80,
        duration: 2,
        opacity: 0.8,
        speed: 3
      },
      repulse: {
        distance: 400,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
};

tsParticles.load("tsparticles", particlesJSON);

function updateParticleColor() {
  primaryColor = getComputedStyle(document.documentElement).getPropertyValue("--primary-color");
  
  let {color, shape, line_linked} = particlesJSON.particles;

  color.value = primaryColor;
  shape.stroke.color = primaryColor;
  line_linked.color = primaryColor;

  tsParticles.load("tsparticles", particlesJSON);
}


