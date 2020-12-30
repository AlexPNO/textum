import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';

import ArrowRight from '@pagerland/icons/src/line/ArrowRight';

import Box from '@pagerland/common/src/components/Box';
import Container from '@pagerland/common/src/components/Container';
import Img from '@pagerland/common/src/components/Img';
import Typography from '@pagerland/common/src/components/Typography';
import List from '@pagerland/common/src/components/List';
import Icon from '@pagerland/common/src/components/Icon';

import arrows from '../../assets/arrows.svg';
import data from '../../data';
import { FeatureItem } from './styled.components';

const Me = ({
  WrapperProps,
  ContainerProps,
  SpacerProps,
  CaptionProps,
  TitleProps,
  TextProps,
  MeWrapperProps,
  IconWrapperProps,
  MeListProps,
  FeatureTitleProps,
  FeatureTextProps,
  ActiveIndicatorProps,
  FeatureDetailsProps,
  FeatureDetailsItemProps,
  FeatureInnerDetailsProps,
  FeatureMobileDetailsItemProps,
  title,
  text,
  name,
  icon,
  me,
}) => {
  const [active, setActive] = useState(0);

  return (
    <Box name={name} {...WrapperProps}>
      <Container {...ContainerProps}>
        <Box {...CaptionProps}>
          <Fade bottom cascade duration={600}>
            <Typography {...TitleProps}>{title}</Typography>
            <Typography {...TextProps}>{text}</Typography>
          </Fade>
        </Box>

      </Container>
    </Box>
  );
};

Me.propTypes = {
  /**
   * Name of container, can be used for anchors
   */
  name: PropTypes.string.isRequired,
  /**
   * Wrapper props
   * @See @pagerland/common/src/components/Box
   */
  WrapperProps: PropTypes.object,
  /**
   * Component container props
   * @See @pagerland/common/src/components/Container
   */
  ContainerProps: PropTypes.object,
  /**
   * Img spacer props
   * @See @pagerland/common/src/components/Img
   */
  SpacerProps: PropTypes.object,
  /**
   * Caption props
   * @See @pagerland/common/src/components/Box
   */
  CaptionProps: PropTypes.object,
  /**
   * Title text props
   * @See @pagerland/common/src/components/Typography
   */
  TitleProps: PropTypes.object,
  /**
   * Main text props
   * @See @pagerland/common/src/components/Typography
   */
  TextProps: PropTypes.object,
  /**
   * Props of me wrapper
   * @See @pagerland/common/src/components/Box
   */
  MeWrapperProps: PropTypes.object,
  /**
   * Props of me list
   * @See @pagerland/common/src/components/List
   */
  MeListProps: PropTypes.object,
  /**
   * Feature title text props
   * @See @pagerland/common/src/components/Typography
   */
  FeatureTitleProps: PropTypes.object,
  /**
   * Feature text props
   * @See @pagerland/common/src/components/Typography
   */
  FeatureTextProps: PropTypes.object,
  /**
   * Props of active icon wrapper
   * @See @pagerland/common/src/components/Box
   */
  ActiveIndicatorProps: PropTypes.object,
  /**
   * Details of active feature props
   * @See @pagerland/common/src/components/Box
   */
  FeatureDetailsProps: PropTypes.object,
  /**
   * Inner container details of active feature props
   * @See @pagerland/common/src/components/Box
   */
  FeatureInnerDetailsProps: PropTypes.object,
  /**
   * Single detail item props
   * @See @pagerland/common/src/components/Box
   */
  FeatureDetailsItemProps: PropTypes.object,

  IconWrapperProps: PropTypes.object,
  /**
   * Single detail item props for mobile
   * @See @pagerland/common/src/components/Box
   */
  FeatureMobileDetailsItemProps: PropTypes.object,
  /**
   * Title node of component
   */
  title: PropTypes.node,
  /**
   * Main description
   */
  text: PropTypes.node,
  /**
   * List of me
   */
  me: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.node,
      text: PropTypes.node,
      details: PropTypes.node,
    }),
  ),
};

Me.defaultProps = {
  WrapperProps: {
    overflow: 'hidden',
    py: {
      _: 30,
      lg: 0,
    },
  },
  SpacerProps: {
    display: 'block',
    mx: 'auto',
    mb: {
      _: 30,
      lg: 90,
    },
  },

  IconWrapperProps: {
    width: 90,
    height: 90,
    mx: 'auto',
    mb: 4,
    flexBox: true,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    color: 'gray.7',
    fontSize: 40,
  },
  CaptionProps: {
    maxWidth: 770,
    mx: 'auto',
    textAlign: 'center',
    mb: {
      _: 30,
      md: 60,
      lg: 100,
    },
  },
  TitleProps: {
    as: 'h3',
    variant: 'h3',
    mb: 4,
  },
  TextProps: {
    variant: 'body1',
    color: 'gray.2',
  },
  MeWrapperProps: {
    flexBox: true,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: {
      _: 'column',
      lg: 'row',
    },
  },
  MeListProps: {
    maxWidth: 470,
  },
  FeatureTitleProps: {
    color: 'gray.0',
    as: 'h4',
    variant: 'h4',
  },
  FeatureTextProps: {
    color: 'gray.2',
  },
  ActiveIndicatorProps: {
    display: {
      _: 'none',
      lg: 'flex',
    },
    bg: 'quaternary',
    color: 'gray.7',
    width: 40,
    height: 40,
    position: 'absolute',
    top: '50%',
    marginTop: -20,
    right: -20,
    borderRadius: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 24,
  },
  FeatureDetailsProps: {
    display: {
      _: 'none',
      lg: 'block',
    },
    position: 'relative',
    width: '100%',
    maxWidth: 570,
  },
  FeatureInnerDetailsProps: {
    paddingTop: '97%',
  },
  FeatureDetailsItemProps: {
    position: 'absolute',
    top: 0,
  },
  FeatureMobileDetailsItemProps: {
    display: {
      _: 'block',
      lg: 'none',
    },
    mt: 16,
  },
  ...data.me,
};

export default Me;
