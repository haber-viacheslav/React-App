import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme/theme';
import { Header } from './components/UI/Header/Header';
import { Main } from './components/UI/Main/Main';
import { Section } from './components/UI/Section/Section';
import { Container } from './components/UI/Container/Container';
import { Modal } from './components/Modal/Modal';

export function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggleIsOpen = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Main>
        <Section>
          <Container>hhh</Container>
        </Section>
      </Main>
      {isOpen && <Modal onClick={handleToggleIsOpen}>hjhh</Modal>}
    </ThemeProvider>
  );
}
