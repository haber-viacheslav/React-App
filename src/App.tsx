import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme/theme';
import { Header } from './components/UI/Header/Header';
import { Main } from './components/UI/Main/Main';
import { Section } from './components/UI/Section/Section';
import { Container } from './components/UI/Container/Container';
import { TaskList } from './components/TaskList/TaskList';
import { Toaster } from 'react-hot-toast';
export function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Main>
        <Section>
          <Container>
            <TaskList />
          </Container>
        </Section>
      </Main>
      <Toaster position="top-right" reverseOrder={false} />
    </ThemeProvider>
  );
}
