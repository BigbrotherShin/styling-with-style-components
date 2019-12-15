import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Button from './Components/Button';

const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto; /* center */
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;

const ButtonGroup = styled.div`
  & + & {
    margin-top: 1rem;
  }
`;

const palette = {
  blue: '#228be6',
  gray: '#496057',
  pink: '#f06595',
};

function App() {
  return (
    <ThemeProvider theme={{ palette }}>
      <AppBlock>
        <ButtonGroup>
          <Button size='large'>Button</Button>
          <Button color="gray">Button</Button>
          <Button size='small' color="pink">Button</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button size='large' outline>Button</Button>
          <Button color="gray" outline>Button</Button>
          <Button size='small' color="pink" outline>Button</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button size='large' fullWidth>Button</Button>
          <Button size='large' color="gray" fullWidth>Button</Button>
          <Button size='large' color="pink" fullWidth>Button</Button>
        </ButtonGroup>
      </AppBlock>
    </ThemeProvider>
  );
}

export default App;
