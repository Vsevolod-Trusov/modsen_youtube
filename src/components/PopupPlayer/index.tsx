import React, { FC } from 'react';

import { useTypedSelector } from '@/hooks';
import { getIsPlayerOpened, setIsPlayerOpened } from '@/store/slices';
import { useDispatch } from 'react-redux';
import {
  CloseButton,
  Overlay,
  PopupContent,
  StyledFrame,
  StyledFrameWrapper,
} from './styles';

const PopupPlayer: FC = () => {
  const isPlayerOpened = useTypedSelector(getIsPlayerOpened);
  const dispatch = useDispatch();

  const togglePopup = () => {
    dispatch(setIsPlayerOpened(!isPlayerOpened));
  };

  return (
    <>
      {isPlayerOpened && (
        <Overlay>
          <PopupContent>
            <CloseButton onClick={togglePopup}>&times;</CloseButton>
            <StyledFrameWrapper>
              <StyledFrame
                title='YouTube video player'
                width='100%'
                height='100%'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                src='https://www.youtube.com/embed/uYPbbksJxIg?autoplay=1'
                allowFullScreen
              />
            </StyledFrameWrapper>
          </PopupContent>
        </Overlay>
      )}
    </>
  );
};

export default PopupPlayer;
