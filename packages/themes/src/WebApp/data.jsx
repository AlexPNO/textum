import React from 'react';

import MapMarker from '@pagerland/icons/src/line/MapMarker';
import textToMultiline from '@pagerland/common/src/utils/textToMultiline';
import Phone from '@pagerland/icons/src/line/Phone';
import Envelope from '@pagerland/icons/src/line/Envelope';
import FacebookF from '@pagerland/icons/src/line/FacebookF';
import Instagram from '@pagerland/icons/src/line/Instagram';
import Youtube from '@pagerland/icons/src/line/Youtube';
import User from '@pagerland/icons/src/line/User';
import UsersAlt from '@pagerland/icons/src/line/UsersAlt';
import Award from '@pagerland/icons/src/line/Award';

import Typography from '@pagerland/common/src/components/Typography';
import Img from '@pagerland/common/src/components/Img';

import { smoothLinkProps } from '@pagerland/common/src/utils';

import maschable from './assets/brands/maschable.svg';
import extremetech from './assets/brands/extremetech.svg';
import techbragins from './assets/brands/techbragins.svg';
import envato from './assets/brands/envato.svg';
import geek from './assets/brands/geek.svg';

import features1 from './assets/Feature-1.svg';
import features2 from './assets/Feature-2.svg';
import features3 from './assets/Feature-3.svg';
import features4 from './assets/Feature-4.svg';

import Screenshot from './assets/screenshot.jpg';
import Screenshot2x from './assets/screenshot@2x.jpg';
import Avatar from './assets/avatar.jpg';
import Avatar2x from './assets/avatar@2x.jpg';

export default {
  title: 'Textum',
  navbar: {
    links: [
      {
        to: 'welcome',
        label: 'Home',
      },
      {
        to: 'features',
        label: 'Curso',
      },
      {
        to: 'me',
        label: 'Sobre Bruna Giro',
      },
      {
        to: 'about',
        label: 'Modalidades',
      },

      {
        to: 'testimonials',
        label: 'Depoimentos',
      },
      // {
      //   to: 'pricing',
      //   label: 'Pricing',
      // },
      {
        to: 'cta',
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
      ' apenas mais um curso de redação 😉',
    ],
    text:
      'Com o curso de Redação “Bruna Giro”, você pode alcançar seus objetivos e garantir sua vaga nos melhores vestibulares do país!',
    actions: [
      {
        label: 'Saiba mais',
        to: 'about',
        ...smoothLinkProps,
        variant: 'secondary',
      },
      {
        label: 'Contate-nos',
        href: 'https://api.whatsapp.com/send?phone=5519999382854&text=Ol%C3%A1%2C%20Bruna%20Giro!%20Me%20ajuda%20a%20quebrar%20tudo%20nos%20vestibulares%3F',
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
    title: 'Modalidades',
    text:
      'Confira as modalidades:',
    sections: [
      {
        IconWrapperProps: {
          bg: 'primary',
        },
        title: 'Aulas individuais',
        text:
          'O aluno tem um plano de estudos personalizado: apenas treinaremos modelos de redação para os vestibulares desejados por ele.',
        icon: User,
      },
      {
        IconWrapperProps: {
          bg: 'secondary',
        },
        title: 'Aulas em dupla',
        text:
          `Atendimento direcionado para as necessidades da apenas treinaremos modelos de redação para os vestibulares
          desejados por ambos.`,
          icon: UsersAlt,
      },
      {
        IconWrapperProps: {
          bg: 'tertiary',
        },
        title: 'Curso extensivo',
        text:
        `Esta modalidade abrange os principais vestibulares (Fuvest, Unicamp, Vunesp e Enem).
         Os grupos são formados por 4 alunos (consulte a disponibilidade).`,
        icon: Award,
      },
    ],
  },
  features: {    
    title: 'Piracicaba oferece inúmeras opções de cursos voltados à redação pré-vestibular. Por que mais um?',
    text:
      'O curso de Redação "Bruna Giro" oferece aulas moldadas às necessidades do aluno. Você aprende e treina apenas os modelos de redação dos vestibulares que pretende prestar. Outro ponto de destaque é a metodologia: as aulas do curso focalizam a prática da escrita. Assim, a teoria aparece de forma contextualizada, sempre parte do texto. Além disso, as aulas são dinâmicas, com a participação ativa do aluno.',
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
  me: {    
    title: 'Sobre Bruna Giro',
    text:
      `
      Bruna Giro é formada em Letras (Unesp), mestre em Estudos Literários (Unesp) e especialista em “Teorias Linguísticas e Ensino” (Unesp).
    Com mais de 13 anos de experiência, atua como professora de Língua Portuguesa, Literatura e Redação e já lecionou em colégios particulares renomados de Piracicaba e Região.

      `,

      IconWrapperProps: {
        bg: 'primary',
      },
      
      icon: User,


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
    title: 'Depoimentos',
    comments: [
      {
        ImgProps: {
          src: Screenshot,
          srcSet: `${Screenshot} 1x, ${Screenshot2x} 2x`,
          alt: 'Screenshot',
        },
        author: 'Felipe Azank, aprovado em Engenharia na Poli-USP',
        text:
          ` Fiz aulas com a Bruna durante o segundo e o terceiro colegial, tanto presencialmente quanto a distância e atesto, sem a menor dúvida, que os conhecimentos passados e as correções feitas por ela foram a garantia necessária para a aprovação. Durante as aulas, foi possível abordar muitos temas , com características variadas: filosóficos,literários e discussões de acontecimentos da contemporaneidade, o que me preparou não só para a FUVEST , mas também para todos os outros vestibulares que prestei. Suas lições foram além do escopo da redação, ajudando-me em temas de literatura, interpretação de texto e na elaboração de respostas dissertativas. Sou muito grato pela Bruna e tenho certeza de que suas aulas são totalmente suficientes para arrasar em qualquer redação de qualquer vestibular.
          `
      },
      {
        ImgProps: {
          src: Screenshot,
          srcSet: `${Screenshot} 1x, ${Screenshot2x} 2x`,
          alt: 'Screenshot',
        },
        author: 'Maria Fernanda Kroll, aprovada em Psicologia-USP',
        text:
          `Sempre gostei de escrever e meus amigos me diziam que eu escrevia muito bem. Dessa forma, acreditava que não teria dificuldades para fazer as redações de vestibular. A primeira nota abaixo da média me mostrou que eu estava errada. Acho que isso acontece com muita gente, pois o esquema de redação no vestibular é bem diferente e é difícil se adaptar a ele. Assim, comecei a fazer aulas com a Bruna e aprendi muita, muita coisa. Não apenas o modelo da redação em si - o que foi muito importante -, mas também sobre tudo o que gira em torno de uma redação, a realidade dos possíveis temas propostos e do cenário brasileiro como um todo, além de descobrir inúmeras possíveis referências  sobre as quais nunca tinha pensado. Por causa das aulas, consegui uma nota boa na redação em todos os vestibulares, além de me sair melhor nas questões de português e, até mesmo, tive mais facilidade em elaborar as respostas de outras matérias. Foi um grande diferencial para mim como um todo e sou muito grata por todas as aulas e aprendizados. Valeu super a pena!
          `,
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

          features: [
            {
              text: 'Aluno',
              prefix: '1',
            },
            {
              text: 'Plano de estudos personalizado',
              prefix: '',
            },      
            {
              text: 'de aula teórica',
              prefix: '1h',
            },            
            {
              text: 'de plantao individual',
              prefix: '30m',
            },      
          ],
          button: {
            text: 'Consultar valor',
            ButtonProps: {
              as: 'a',
              href: 'https://mypags.app',
            },
          },
        },
        {
          title: 'Duplas',
          // price: 'R$ 400',
          // period: 'Por mês',
          features: [
            {
              text: 'Alunos',
              prefix: '2',
            },
            {
              text: 'Plano de estudos personalizado',
              prefix: '',
            },      
            {
              text: 'de aula teórica',
              prefix: '1h',
            },            
            {
              text: 'de plantao individual',
              prefix: '30m',
            },      
          ],
          button: {
            text: 'Consultar valor',
            ButtonProps: {
              as: 'a',
              href: 'https://mypags.app',
            },
          },
        },
        {
          title: 'Extensivo',

          features: [
            {
              text: 'Alunos',
              prefix: '4',
            },
            {
              text: 'Foco nos principais vestibulares',
              prefix: '',
            },      
            {
              text: 'de aula teórica',
              prefix: '1h',
            },            
            {
              text: 'de plantao individual',
              prefix: '30m',
            },      
          ],
          button: {
            text: 'Consultar valor',
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
    title: 'Curtiu?',
    button: {
      label: 'Entra em contato!',
      href:      
        'https://api.whatsapp.com/send?phone=5519999382854&text=Ol%C3%A1%2C%20Bruna%20Giro!%20Me%20ajuda%20a%20quebrar%20tudo%20nos%20vestibulares%3F'
    },
  },
  socialLinks: [
    {
      icon: Instagram,
      href: 'https://mypags.app',
      title: 'Instagram',
    },
  ],
  footer: {
    section1: {
      text: `
        Bruna Giro é formada em Letras (Unesp), mestre em Estudos Literários (Unesp) e especialista em “Teorias Linguísticas e Ensino” (Unesp).
      `,
    },
    contact: {
      title: 'Contato',
      sections: [
        {
          icon: MapMarker,
          text: `Piracicaba/SP`,
        },
        {
          icon: Phone,
          text: '(19) 9 9938-2854',
        },
        {
          icon: Envelope,
          text: 'brunagiro@gmail.com',
        },
      ],
    },
    section3: {
      title: '',
      text: ``,
      cta: {
        text: '',
        href: '',
      },
    },
  },
  copyright: '© 2021 BrunaGiro',
};
