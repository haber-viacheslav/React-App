import React from 'react';
import { ThemeProvider } from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';
import { theme } from './theme/theme';
import { Button } from './components/UI/buttons/Button';
import { Modal } from './components/Modals/Modal';
import { Header } from './components/UI/Header/Header';
import { Main } from './components/UI/Main/Main';
import { Section } from './components/UI/Section/Section';
import { Container } from './components/UI/Container/Container';
import { Lists } from './components/Lists/Lists';
import { Toaster } from 'react-hot-toast';
import { useAppDispatch, useAppSelector } from './redux/hook/hook';
import { selectIsOpen } from './redux/modal/selectors';
import { setModalClose } from './redux/modal/modalSlice';

export function App() {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector(selectIsOpen);

  const handleToggleIsOpen = (): void => {
    dispatch(setModalClose({ isOpen: false }));
  };
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Main>
        <Section>
          <Container>
            <Lists />
          </Container>
        </Section>
      </Main>
      <Toaster position="top-right" reverseOrder={false} />
      {isOpen && (
        <Modal onClick={handleToggleIsOpen}>
          <Button icon={AiOutlineClose} onClick={handleToggleIsOpen} />
        </Modal>
      )}
    </ThemeProvider>
  );
}
