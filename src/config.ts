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
      iconPath: string;
      viewBox: string;
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
      iconPath:
        'M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z',
      viewBox: '0 -960 960 960',
    },
    linkedin: {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/alwaysjad/',
      iconPath:
        'M43.4642 147.485H12.962V49.2594H43.4642V147.485ZM28.1967 35.8605C18.4431 35.8605 10.5318 27.7818 10.5318 18.0282C10.5318 13.3432 12.3929 8.85006 15.7057 5.53726C19.0185 2.22446 23.5117 0.363342 28.1967 0.363342C32.8817 0.363342 37.3748 2.22446 40.6876 5.53726C44.0004 8.85006 45.8615 13.3432 45.8615 18.0282C45.8615 27.7818 37.947 35.8605 28.1967 35.8605ZM157.624 147.485H127.188V99.6694C127.188 88.2738 126.958 73.6598 111.329 73.6598C95.4702 73.6598 93.0401 86.0407 93.0401 98.8484V147.485H62.5707V49.2594H91.825V62.6583H92.2519C96.3241 54.9408 106.271 46.7964 121.112 46.7964C151.982 46.7964 157.657 67.1246 157.657 93.5283V147.485H157.624Z',
      viewBox: '0 0 169 169',
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
