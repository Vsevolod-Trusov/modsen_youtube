import React, { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { FrameSkeletonLoader } from '@/components';
import { useTypedSelector } from '@/hooks';
import { useGetFilmByIdQuery } from '@/store/api';
import {
  getIsPlayerOpened,
  getSelectedFilmId,
  setIsPlayerOpened,
} from '@/store/slices';
import { Film } from '@/types';

import {
  CloseButton,
  Overlay,
  PopupContent,
  StyledFrame,
  StyledFrameWrapper,
} from './styles';

const PopupPlayer: FC = () => {
  const selectedFilmId = useTypedSelector(getSelectedFilmId);
  const { data, isLoading } = useGetFilmByIdQuery(selectedFilmId);

  const [film, setFilm] = useState<Film>({} as Film);

  const isPlayerOpened = useTypedSelector(getIsPlayerOpened);
  const dispatch = useDispatch();

  const togglePopup = () => {
    dispatch(setIsPlayerOpened(!isPlayerOpened));
  };

  useEffect(() => {
    if (data) {
      setFilm(data);
    }
  }, [data]);

  return (
    <>
      {isPlayerOpened && (
        <Overlay>
          <PopupContent>
            <CloseButton onClick={togglePopup}>&times;</CloseButton>
            {isLoading ? (
              <FrameSkeletonLoader />
            ) : (
              <StyledFrameWrapper>
                <StyledFrame
                  title='YouTube video player'
                  width='100%'
                  height='100%'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  src={`${film.trailer_embed_link}?autoplay=1`}
                  allowFullScreen
                />
              </StyledFrameWrapper>
            )}
          </PopupContent>
        </Overlay>
      )}
    </>
  );
};

export default PopupPlayer;
