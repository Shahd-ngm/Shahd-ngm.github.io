

// inspired by https://vincentgarreau.com/particles.js/

particlesJS('particles-js', {

	particles: {

        	// number of particles, with options for density.
		number: {
			value: 80,
			density: {
				enable: true,
				value_area: 800,
			}
		},

            // for the colot of particles 
		color: {
			value: ['#9b59b6', '#e73cb1']  
		},
		shape: {
			type: 'circle',
			stroke: {
				width: 0,
				color: '#e73cb1'
			},
			polygon: {
				nb_sides: 5
			},
			image: {
				src: 'img/github.svg',
				width: 100,
				height: 100
			}

		},
            //  Sets the opacity of the particles.
		opacity: {
			value: 0.5,
			random: false,
			anim: {
				enable: false,
				speed: 1,
				opacity_min: 0.1,
				sync: false
			}
		},
            // Controls the size of the particles.
		size: {
			value: 3,
			random: true,
			anim: {
				enable: false,
				speed: 40,
				size_min: 0.1,
				sync: false
			}
		},
            //  Configures the connecting lines between particles.
		line_linked: {
			enable: true,
			distance: 150,
			color: '#9b59b6',
			opacity: 0.4,
			width: 1
		},
		move: {
			enable: true,
			speed: 6,
			direction: 'none',
			random: false,
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
        	// Specifies where the interactivity should be detected (in this case, on the canvas).
		detect_on: 'canvas',
            // Defines various events like onhover and onclick.
		events: {
			onhover: {
				enable: true,
				mode: 'repulse'
			},
			onclick: {
				enable: true,
				mode: 'push'
			},
			resize: true
		},
            // Specifies different interaction modes 
		modes: {
			grab: {
				distance: 400,
				line_linked: {
					opacity: 1
				}
			},
			bubble: {
				distance: 400,
				size: 40,
				duration: 2,
				opacity: 8,
				speed: 3
			},
			repulse: {
				distance: 200
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

});index.js
