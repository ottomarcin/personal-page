// Education text to display on site

const content = [
  {
    title: 'Master of Engineering',
    field: 'Mechatronics',
    university: 'Warsaw University of Technology',
    years: '2019-2021',
    thesis:
      'Face morphing research based on directional biometric images (2021)',
    description: `In the master thesis I researched application of view morphing algorithm as a potential substitution of 3D structured-light face scanning. The final result was achieved by processing triangular sections of directional biometric images from 3D scanning system. Those sections were based on facial features retrieved by AI algorithms. Processing the images required deep understanding of principles of multicamera systems, including subjects such as epipolar geometry. All the calculations have been performed using Python, manipulations of images utilized OpenCV library. `,
    badges: [
      { text: 'Python', color: '#f0cc5c' },
      { text: 'OpenCV', color: '#418cf7' },
      { text: 'dlib', color: '#82B37A' },
    ],
  },
  {
    title: 'Bachelor of Engineering',
    field: 'Mechatronics',
    university: 'West Pomeranian University of Technology',
    years: '2015-2019',
    thesis: 'Development of an automatic pedestrian detection system (2019)',
    description: `As the final project I've developed an automatic system detecting
              and positioning pedestrians on the crosswalk. To achieve this,
              I’ve used MS Kinect - time-of-flight sensor, enabling
              real-time 3D positioning of pedestrians. Marking their
              positions have been made using LEDs located around each stripe of
              the crosswalk. They were enlightened when pedestrian
              approached within a distance lower than half meter from every
              individual LED, resulting in bright circle around him.`,
    badges: [
      { text: 'C#', color: '#4a9d37' },
      { text: 'MS Kinect', color: '#6549b7' },
    ],
  },
  {
    title: 'The most important thing I learned at the university',
    description: `During my time at the university I faced a great variety of projects - calculating inversed kinematics formula for three joints robot and simulating it in Matlab, building and programming self-driving arduino based robot, designing automatic tool changing device for milling machine and modeling it in Solidworks, simulating fluids flow in Ansys and many, many others. But the most important skill I got during all these years of learning was the ability to solve the problems. Every new project grew my confidence, that any task is possible to resolve, it only gets some time to research and persistency not to give up. `,
  },
];

export default content;
