export const pages = [
  // 'home' has to be in navbar, not in scene so it doesnt have randomNumbers property, whick can be checked later in code
  {
    index: 0,
    text: 'Home',
    link: '/',
  },
  {
    index: 1,
    text: 'Education',
    link: '/education',
    randomNumbers: {
      x: Math.random() - 0.5,
      y: Math.random() - 0.5,
      z: Math.random(),
      fontSize: Math.random(),
    },
  },
  {
    index: 2,
    text: 'Experience',
    link: '/experience',
    randomNumbers: {
      x: Math.random() - 0.5,
      y: Math.random() - 0.5,
      z: Math.random(),
      fontSize: Math.random(),
    },
  },
  {
    index: 3,
    text: 'About Me',
    link: '/about',
    randomNumbers: {
      x: Math.random() - 0.5,
      y: Math.random() - 0.5,
      z: Math.random(),
      fontSize: Math.random(),
    },
  },
  {
    index: 4,
    text: 'Contact',
    link: '/contact',
    randomNumbers: {
      x: Math.random() - 0.5,
      y: Math.random() - 0.5,
      z: Math.random(),
      fontSize: Math.random(),
    },
  },
];
