import React, { FC, useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { FrameSkeletonLoader } from '@/components';
import { selectedFilmHandler } from '@/helpers';
import { useTypedSelector } from '@/hooks';
import { useLazyGetFilmByIdQuery } from '@/store/api';
import {
  getIsPlayerOpened,
  getSelectedFilmId,
  getStorage,
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
  const elasticStorage = useTypedSelector(getStorage);
  const [getFilmById, { isLoading }] = useLazyGetFilmByIdQuery();
  const [film, setFilm] = useState<Film>({} as Film);
  const isPlayerOpened = useTypedSelector(getIsPlayerOpened);
  const dispatch = useDispatch();
  const togglePopup = useCallback(() => {
    dispatch(setIsPlayerOpened(!isPlayerOpened));
  }, [isPlayerOpened]);
  const filterFilms = useCallback(() => {
    selectedFilmHandler({
      selectedFilmId,
      setFilm,
      elasticStorage,
      dispatch,
      getFilmById,
    });
  }, [selectedFilmId, setFilm, elasticStorage, dispatch, getFilmById]);

  useEffect(() => filterFilms(), [filterFilms]);

  return (
    <>
      {isPlayerOpened && !!film.trailer_embed_link && (
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

export { PopupPlayer };
