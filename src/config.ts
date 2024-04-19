import icon from '../src/assets/icon.png';

interface IConfig {
  me: {
    name: string;
    job: string;
    started: string;
    stack: string;
    hobby: string;
    projectLink: string;
  };
  socials: {
    [name: string]: {
      name: string;
      url: string;
      icon: string;
    };
  };
  projects: {
    [name: string]: {
      url: string;
      tags: string[];
    };
  };
  og: {
    image: string;
  };
}

export const Config: IConfig = {
  me: {
    name: 'Jorge Delgadillo',
    job: 'backend engineer',
    started: '2022-01-01',
    stack:
      'TypeScript, Node.js, GraphQL, PostgreSQL, Docker, Kubernetes, AWS, GCP, Azure, etc.',
    hobby: 'coding, reading, writing, composing music, etc.',
    projectLink: 'https://github.com/ad-delgadillo?tab=repositories',
  },
  socials: {
    email: {
      name: 'Email',
      url: 'mailto:your.jorge.aldem@gmail.com',
      icon: '../src/assets/email.svg',
    },
    linkedin: {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/alwaysjad/',
      icon: '../src/assets/in.svg',
    },
  },

  projects: {
    'Music Portfolio Website': {
      url: 'https://github.com/jad-delgadillo/dlgdll',
      tags: ['typescript', 'nextjs', 'react', 'tailwind'],
    },
    Linux: {
      url: 'https://github.com/torvalds/linux',
      tags: ['c', 'kernel', 'unix', 'os'],
    },
  },
  og: {
    image: icon.src,
  },
};
