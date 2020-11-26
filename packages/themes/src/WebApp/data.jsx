import React from 'react';

import MapMarker from '@pagerland/icons/src/line/MapMarker';
import textToMultiline from '@pagerland/common/src/utils/textToMultiline';
import Phone from '@pagerland/icons/src/line/Phone';
import Envelope from '@pagerland/icons/src/line/Envelope';
import FacebookF from '@pagerland/icons/src/line/FacebookF';
import Instagram from '@pagerland/icons/src/line/Instagram';
import Youtube from '@pagerland/icons/src/line/Youtube';
import Cog from '@pagerland/icons/src/line/Cog';
import Figma from '@pagerland/icons/src/line/Figma';
import LifeRing from '@pagerland/icons/src/line/LifeRing';

import Typography from '@pagerland/common/src/components/Typography';
import Img from '@pagerland/common/src/components/Img';

import { smoothLinkProps } from '@pagerland/common/src/utils';

import maschable from './assets/brands/maschable.svg';
import extremetech from './assets/brands/extremetech.svg';
import techbragins from './assets/brands/techbragins.svg';
import envato from './assets/brands/envato.svg';
import geek from './assets/brands/geek.svg';

import features1 from './assets/features.svg';
import features2 from './assets/features-2.svg';
import features3 from './assets/features-3.svg';
import features4 from './assets/features-4.svg';

import Screenshot from './assets/screenshot.jpg';
import Screenshot2x from './assets/screenshot@2x.jpg';
import Avatar from './assets/avatar.jpg';
import Avatar2x from './assets/avatar@2x.jpg';

export default {
  title: 'Textum',
  navbar: {
    links: [
      {
        to: '',
        label: 'Home',
      },
      {
        to: 'about',
        label: 'Curso',
      },
      {
        to: 'features',
        label: 'Modalidades',
      },
      {
        to: 'screens',
        label: 'Sobre a Bruna Giro',
      },
      {
        to: 'clients',
        label: 'Depoimentos',
      },
      // {
      //   to: 'pricing',
      //   label: 'Pricing',
      // },
      {
        to: 'contact',
        label: 'Contato',
      },
    ],
    // actions: [
    //   {
    //     href:
    //       'https://themeforest.net/item/pagerland-react-and-gatsby-landing-page-templates/26548567',
    //     label: 'Buy this theme',
    //   },
    // ],
  },
  welcome: {
    title: [
      'Este ',
      <Typography as="span" variant="h1" color="primary">
        não é
      </Typography>,
      ' apenas outro curso de redação 😉',
    ],
    text:
      'Precisando daquela ajudinha em Redação? Com o curso de Redação “Bruna Giro”, você pode alcançar seus objetivos e garantir sua vaga nos melhores vestibulares do país!',
    actions: [
      {
        label: 'Saiba mais',
        to: 'about',
        ...smoothLinkProps,
        variant: 'secondary',
      },
      {
        label: 'Agendar uma aula',
        href: 'https://mypags.app',
        as: 'a',
        variant: 'primary',
      },
    ],
  },
  brands: [
    {
      src: maschable,
      alt: 'Maschable',
      LinkProps: {
        href: 'https://mypags.app',
        title: 'Maschable',
      },
    },
    {
      src: extremetech,
      alt: 'Extremetech',
      LinkProps: {
        href: 'https://mypags.app',
        title: 'Extremetech',
      },
    },
    {
      src: techbragins,
      alt: 'Techbragins',
      LinkProps: {
        href: 'https://mypags.app',
        title: 'Techbragins',
      },
    },
    {
      src: envato,
      alt: 'Envato',
      LinkProps: {
        href: 'https://mypags.app',
        title: 'Envato',
      },
    },
    {
      src: geek,
      alt: 'Geek',
      LinkProps: {
        href: 'https://mypags.app',
        title: 'Geek',
      },
    },
  ],
  about: {
    sections: [
      {
        IconWrapperProps: {
          bg: 'primary',
        },
        title: 'Built with Gatsby and React',
        text:
          'Donec dapibus quis neque eget dapibus. Curabitur ultrices massa ligula, gravida auctor dolor aliquet sed.',
        icon: Cog,
      },
      {
        IconWrapperProps: {
          bg: 'secondary',
        },
        title: 'Custom design in Figma',
        text:
          'Donec dapibus quis neque eget dapibus. Curabitur ultrices massa ligula, gravida auctor dolor aliquet sed.',
        icon: Figma,
      },
      {
        IconWrapperProps: {
          bg: 'tertiary',
        },
        title: 'Incredible support',
        text:
          'Donec dapibus quis neque eget dapibus. Curabitur ultrices massa ligula, gravida auctor dolor aliquet sed.',
        icon: LifeRing,
      },
    ],
  },
  features: {    
    title: 'Piracicaba oferece inúmeras opções de cursos voltados à redação para o vestibular. Por que mais um?',
    text:
      'O curso de Redação Bruna Giro oferece aulas moldadas às necessidades do aluno. Você aprende e treina apenas os modelos de redação dos vestibulares que pretende prestar. Outro ponto de destaque é a metodologia! As aulas do curso focalizam a prática da escrita. Assim, a teoria aparece de forma contextualizada e sempre parte do texto. Além disso, as aulas são dinâmicas, com ativa participação do aluno. Confira as modalidades:',
    features: [
      {
        title: 'Individual',
        text:
          'Nesta modalidade, aluno tem um plano de estudos personalizado: apenas treinaremos modelos de redação para os vestibulares desejados por ele. Tempo: 1h30min,incluindo: aula teórica/discussão de temas/plantão para correção e orientação da reescrita.',
        details: <Img src={features1} maxWidth="121.0526315789%" ml="-10.5%" mt="-10.9%" />,
      },
      {
        title: 'Dupla',
        text:
          `Nesta modalidade, atendimento direcionado para as necessidades da apenas treinaremos modelos de redação para os vestibulares
          desejados por ambos.
          *Tempo: 1h por semana para aula teórica e/ou discussão de tema e 30min de atendimento individual para cada estudante.
          Obs: as duplas deverão ser formadas pelos alunos interessados.`,
        details: <Img src={features2} maxWidth="121.0526315789%" ml="-10.5%" mt="-10.9%" />,
      },
      {
        title: 'Extensivo',
        text:
          `Esta modalidade abrange os principais vestibulares (Fuvest, Unicamp, Vunesp e Enem).
          Grupos formados por 4 alunos - o aluno pode formar o grupo ou isso pode ficar a critério da professora (consulte a disponibilidade dessas opções) *Tempo: 1h por semana para aula teórica e/ou discussão de tema e 30min de atendimento individual para cada estudante.`,
        details: <Img src={features3} maxWidth="121.0526315789%" ml="-10.5%" mt="-10.9%" />,
      },
    ],
  },
  screenshots: {
    title: 'Screenshots',
    screenshots: [
      {
        ImgProps: {
          src: Screenshot,
          srcSet: `${Screenshot} 1x, ${Screenshot2x} 2x`,
          alt: 'Screenshot',
        },
        title: 'Screenshot name',
        text:
          'Proin consectetur in enim a aliquam. Vivamus lacinia et orci at varius. Nam nisi libero, faucibus non metus consequat, lacinia facilisis orci.',
      },
      {
        ImgProps: {
          src: Screenshot,
          srcSet: `${Screenshot} 1x, ${Screenshot2x} 2x`,
          alt: 'Screenshot',
        },
        title: 'Second screenshot name',
        text:
          'Curabitur ut lectus hendrerit, efficitur ante non, vulputate nibh. Aenean luctus consequat nunc id aliquam. Praesent pellentesque.',
      },
      {
        ImgProps: {
          src: Screenshot,
          srcSet: `${Screenshot} 1x, ${Screenshot2x} 2x`,
          alt: 'Screenshot',
        },
        title: 'Third screenshot name',
        text:
          'Vestibulum id tempor neque, viverra posuere nulla. Nulla sagittis augue id pretium finibus. Praesent vel lacinia velit. Suspendisse ornare porta.',
      },
    ],
  },

  comments: {
    title: 'Screenshots',
    comments: [
      {
        ImgProps: {
          src: Screenshot,
          srcSet: `${Screenshot} 1x, ${Screenshot2x} 2x`,
          alt: 'Screenshot',
        },
        author: 'Screenshot name',
        text:
          'Proin consectetur in enim a aliquam. Vivamus lacinia et orci at varius. Nam nisi libero, faucibus non metus consequat, lacinia facilisis orci.',
      },
      {
        ImgProps: {
          src: Screenshot,
          srcSet: `${Screenshot} 1x, ${Screenshot2x} 2x`,
          alt: 'Screenshot',
        },
        author: 'Second screenshot name',
        text:
          'Curabitur ut lectus hendrerit, efficitur ante non, vulputate nibh. Aenean luctus consequat nunc id aliquam. Praesent pellentesque.',
      },
      {
        ImgProps: {
          src: Screenshot,
          srcSet: `${Screenshot} 1x, ${Screenshot2x} 2x`,
          alt: 'Screenshot',
        },
        author: 'Third screenshot name',
        text:
          'Vestibulum id tempor neque, viverra posuere nulla. Nulla sagittis augue id pretium finibus. Praesent vel lacinia velit. Suspendisse ornare porta.',
      },
    ],
  },

  clients: {
    title: 'See what other people say about us',
    avatar: {
      src: Avatar,
      srcSet: `${Avatar} 1x, ${Avatar2x} 2x`,
      alt: 'Avatar',
    },
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras fringilla mi sit amet malesuada euismod. Morbi pulvinar mauris et erat hendrerit blandit. Duis euismod lectus in eros varius, sed mattis leo posuere. In dapibus semper orci et convallis. Cras posuere dui at turpis viverra fermentum.',
    author: 'Courtney Pena, Los Angeles',
    

    comments: [
      {
        author: 'Pat Cooper, Big Company SEO',
        text: `Elit officia consectetur mollit occaecat incididunt sunt labore ad est veniam cupidatat tempor. Deserunt veniam nostrud est ad enim labore sit dolore amet enim veniam ipsum. Ullamco cillum ad nulla quis aliquip fugiat veniam incididunt ipsum cupidatat. Lorem qui voluptate ut enim occaecat et ut eu aliquip culpa.`,
        AvatarProps: {
          src: Avatar,
          srcSet: `${Avatar} 1x, ${Avatar} 2x`,
        },
      },
      {
        author: 'Orsola Jeroch, Bigger Company CTO',
        text: `Praesent nec commodo arcu. Vivamus convallis pretium malesuada. Aenean feugiat maximus suscipit. Fusce maximus aliquam ipsum, at hendrerit augue aliquet ac. Maecenas scelerisque, massa a fringilla imperdiet, velit purus gravida dolor, et blandit lorem nulla non eros.`,
        AvatarProps: {
          src: Avatar,
          srcSet: `${Avatar} 1x, ${Avatar} 2x`,
        },
      },
    ],


  },
  pricing: {
    title: 'Valores',
    prices: {
      currency: 'usd',
      types: {
        a: 'Mensal',
        b: 'Anual',
      },
      sections: [
        {
          title: 'Indiviual',
          price: 'R$ 450',
          period: 'Por mês',
          features: [
            {
              text: 'Aluno',
              prefix: '1',
            },
            {
              text: 'de aula',
              prefix: '1:30',
            },
            {
              text: 'projects',
              prefix: '5',
            },
            {
              text: 'tasks',
              prefix: 'No',
            },
            {
              text: 'subtasks',
              prefix: 'No',
            },
            {
              text: 'invoicing',
              prefix: 'No',
            },
            {
              text: 'estimating',
              prefix: 'No',
            },
          ],
          button: {
            text: 'Try now',
            ButtonProps: {
              as: 'a',
              href: 'https://mypags.app',
            },
          },
        },
        {
          title: 'Duplas',
          price: 'R$ 400',
          period: 'Por mês',
          features: [
            {
              text: 'Alunos',
              prefix: '2',
            },
            {
              text: 'de aula',
              prefix: '2h',
            },
            {
              text: 'projects',
              prefix: 'Unlimited',
            },
            {
              text: 'tasks',
              prefix: 'Unlimited',
            },
            {
              text: 'subtasks',
              prefix: 'No',
            },
            {
              text: 'invoices per month',
              prefix: '10',
            },
            {
              text: 'estimates per month',
              prefix: '10',
            },
          ],
          button: {
            text: 'Try now',
            ButtonProps: {
              as: 'a',
              href: 'https://mypags.app',
            },
          },
        },
        {
          title: 'Extensivo',
          price: 'R$ 450',
          period: 'per month',
          features: [
            {
              text: 'Alunos',
              prefix: '4',
            },
            {
              text: 'por semana para aula teórica e/ou discussão',
              prefix: '1H',
            },
            {
              text: 'projects',
              prefix: 'Unlimited',
            },
            {
              text: 'tasks',
              prefix: 'Unlimited',
            },
            {
              text: 'subtasks',
              prefix: 'Unlimited',
            },
            {
              text: 'invoicing',
              prefix: 'Unlimited',
            },
            {
              text: 'estimating',
              prefix: 'Unlimited',
            },
          ],
          button: {
            text: 'Try now',
            ButtonProps: {
              as: 'a',
              href: 'https://mypags.app',
            },
          },
        },
      ],
    },
  },
  cta: {
    title: 'Do you like what you see?',
    button: {
      label: 'Buy it on Themeforest',
      href:
        'https://themeforest.net/item/pagerland-react-and-gatsby-landing-page-templates/26548567',
    },
  },
  socialLinks: [
    {
      icon: FacebookF,
      href: 'https://mypags.app',
      title: 'Facebook',
    },
    {
      icon: Instagram,
      href: 'https://mypags.app',
      title: 'Instagram',
    },
    {
      icon: Youtube,
      href: 'https://mypags.app',
      title: 'YouTube',
    },
  ],
  footer: {
    section1: {
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rhoncus dolor et dolor eleifend laoreet. Donec id nisi finibus, consequat libero vitae, imperdiet urna.`,
    },
    contact: {
      title: 'Contact',
      sections: [
        {
          icon: MapMarker,
          text: textToMultiline(`9207 Lakeshore Rd\nShreveport, Rhode Island\n98563 United States`),
        },
        {
          icon: Phone,
          text: '(262) 555-0131',
        },
        {
          icon: Envelope,
          text: 'info@example.com',
        },
      ],
    },
    section3: {
      title: 'Support & downloads',
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rhoncus dolor et dolor eleifend.`,
      cta: {
        text: 'Buy it on Themeforest',
        href: 'https://mypags.app',
      },
    },
  },
  copyright: '© 2020 Coffeecream Themes',
};
