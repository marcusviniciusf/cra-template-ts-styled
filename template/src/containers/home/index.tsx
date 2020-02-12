import React from 'react';
// Store
import { useStore } from 'store';
import { useActions } from 'store/actions';
// UI Components
import { Box, Flex, Heading, Text, SmallText } from 'components';
// Styles
import { ColorBox, Container, Spinner, CustomButton } from './styles';

const HomePage: React.FC = () => {
  const { state, dispatch } = useStore();
  const { handleLoadingOn, handleLoadingOff } = useActions({ dispatch });
  const { loading } = state;
  function handleLoading(): void {
    if (loading) {
      handleLoadingOff();
    } else {
      handleLoadingOn();
    }
  }
  return (
    <Container>
      <Heading>Heading 1</Heading>
      <Heading as="h2" fontSize={4}>
        Heading 2
      </Heading>
      <Heading as="h3" fontSize={3}>
        Heading 3
      </Heading>
      <Text>Paragraph</Text>
      <SmallText>Small Text</SmallText>
      <Flex flexWrap="wrap" m={-1}>
        <Box p={[1]} width={[1, 1 / 2, 1 / 2, 1 / 3]}>
          <ColorBox />
        </Box>
        <Box p={[1]} width={[1, 1 / 2, 1 / 2, 1 / 3]}>
          <ColorBox />
        </Box>
        <Box p={[1]} width={[1, 1 / 2, 1 / 2, 1 / 3]}>
          <ColorBox />
        </Box>
      </Flex>
      <CustomButton onClick={handleLoading}>
        {loading ? 'Disable Loading' : 'Enable Loading'}
      </CustomButton>
      {loading && <Spinner />}
    </Container>
  );
};

export default HomePage;
