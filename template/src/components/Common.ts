import styled from 'styled-components';
import {
  flexbox,
  space,
  layout,
  position,
  color,
  compose,
} from 'styled-system';
// Interfaces
import { CommonInterfaces } from 'interfaces';

const boxProps = compose(space, color, layout, flexbox, position);

export const Box = styled('div')<CommonInterfaces.BoxInterface>(
  {
    boxSizing: 'border-box',
  },
  boxProps
);

export const Flex = styled(Box)({
  display: 'flex',
});
