import React from 'react';
import PropTypes from 'prop-types';

import Head from 'next/head';
import Sticky from 'react-sticky-el';
import absoluteUrl from 'next-absolute-url';

import Theme, { theme } from '@pagerland/themes/src/WebApp';
import {
  Navbar,
  Copyright,
  Footer,
  Welcome,
  Brands,
  About,
  Features,
  Me,
  Screenshots,
  Testmonials,
  Clients,
  Pricing,
  Cta,
} from '@pagerland/themes/src/WebApp/containers';

import preview from '@pagerland/themes/src/WebApp/assets/preview.png';

import SEO from '../components/SEO';

const WebApp = ({ url }) => (
  <Theme>
    <Head>
      <link href={theme.typography.googleFont} rel="stylesheet" />
      <meta name="theme-color" content={theme.colors.primary} />
      <meta property="og:image" content={`${url}${preview}`} />
    </Head>
    <SEO title="Bruna Giro" />

    <Sticky style={{ zIndex: 999, position: 'relative' }}>
      <Navbar />
    </Sticky>

    <Welcome name="welcome" />
    {/* <Brands name="" /> */}

    <Features name="features" />
    <Me name="me" />

    <About name="about" TextProps= {{"color": "#204A65" }}/>
  
    {/* <Screenshots name="screens" /> */}
    {/* <Pricing name="pricing" /> */}
    <Testmonials name="testimonials" />
    {/* <Clients name="clients" /> */}

    <Cta name="cta" />

    <Footer name="contact" />
    <Copyright />
  </Theme>
);

WebApp.propTypes = {
  url: PropTypes.string,
};

WebApp.defaultProps = {
  url: 'https://pager.land/next/',
};

export default WebApp;
