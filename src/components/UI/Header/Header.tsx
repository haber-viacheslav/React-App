import React from 'react';
import { IoMenu } from 'react-icons/io5';
import { Container } from '../Container/Container';
import { StyledHeader, StyledHeaderLogo, FlexContainer } from './Header.styled';
import { AppBar } from '../../../components/AppBar/AppBar';
import { IHeaderProps } from '../../../types/types';
import { useResize } from '../../../hooks/useResize';
import { Button } from '../buttons/Button';
import { useAppDispatch } from '../../../redux/hook/hook';
import { ButtonStyle, ModalVariant } from '../../../types/types';
import { setVariantAndOpen } from '../../../redux/modal/modalSlice';
export const Header: React.FC<IHeaderProps> = () => {
  const dispatch = useAppDispatch();
  const { isScreenMd } = useResize();

  const handleSetVariant = (variant: ModalVariant): void => {
    dispatch(setVariantAndOpen({ variant }));
  };

  return (
    <StyledHeader>
      <Container>
        <FlexContainer>
          <StyledHeaderLogo href="/">My Task Board</StyledHeaderLogo>
          {isScreenMd ? (
            <Button
              variant={ButtonStyle.Mobile}
              icon={IoMenu}
              onClick={() => handleSetVariant(ModalVariant.MobileMenu)}
            />
          ) : (
            <AppBar />
          )}
        </FlexContainer>
      </Container>
    </StyledHeader>
  );
};
