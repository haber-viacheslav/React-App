import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { FiPlus } from 'react-icons/fi';
import { PiArrowCounterClockwise } from 'react-icons/pi';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme/theme';
import { Header } from './components/UI/Header/Header';
import { Main } from './components/UI/Main/Main';
import { Section } from './components/UI/Section/Section';
import { Container } from './components/UI/Container/Container';
import { Modal } from './components/Modal/Modal';
import { ModalVariant } from './types/types';
import { AddButton } from './components/UI/buttons/AddButton';
import { Button } from './components/UI/buttons/Button';
import { ButtonStyle } from './types/types';

export function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [modalVariant, setModalVariant] = useState<ModalVariant>(
    ModalVariant.TaskDetails
  );

  const handleSetVariant = (variant: ModalVariant): void => {
    setModalVariant(variant);
    setIsOpen(true);
  };
  const handleToggleIsOpen = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <Header>
        <Button
          icon={FiPlus}
          onClick={() => handleSetVariant(ModalVariant.AddList)}
          text="Create new list"
          variant={ButtonStyle.Dark}
        />
        <Button
          icon={PiArrowCounterClockwise}
          onClick={() => handleSetVariant(ModalVariant.TaskActivity)}
          text="History"
          variant={ButtonStyle.Light}
        />
      </Header>
      <Main>
        <Section>
          <Container>
            <AddButton onClick={() => handleSetVariant(ModalVariant.AddTask)} />
          </Container>
        </Section>
      </Main>
      {isOpen && (
        <Modal variant={modalVariant} onClick={handleToggleIsOpen}>
          <Button icon={AiOutlineClose} onClick={handleToggleIsOpen} />
        </Modal>
      )}
    </ThemeProvider>
  );
}
