import React from 'react';
import { theme } from 'assets';
import styled from 'styled-components';
import {
  color,
  ColorProps,
  typography,
  TypographyProps,
  space,
  SpaceProps,
  compose,
} from 'styled-system';

const textProps = compose(space, color, typography);

type TextProps = SpaceProps & TypographyProps & ColorProps;

export const CommonText = styled('div')<TextProps>({}, textProps);

export const Text = styled(CommonText).attrs(() => {
  return {
    as: 'p',
  };
})``;
Text.defaultProps = {
  fontSize: theme.fontSizes[3],
};

export const SmallText = styled(CommonText).attrs(() => {
  return {
    as: 'span',
  };
})`
  font-size: ${({ theme }) => theme.fontSizes[1]}px;
`;

interface HeadingProps {
  as?: React.ElementType;
}

export const Heading = styled(CommonText).attrs((props: HeadingProps) => {
  return {
    as: props.as || 'h1',
  };
})``;

Heading.defaultProps = {
  fontSize: theme.fontSizes[5],
};
