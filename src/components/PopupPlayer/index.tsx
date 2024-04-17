import React, { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { FrameSkeletonLoader } from '@/components';
import { EMPTY_STRING } from '@/contants';
import { useTypedSelector } from '@/hooks';
import { useLazyGetFilmByIdQuery } from '@/store/api';
import {
  getIsPlayerOpened,
  getSelectedFilmId,
  getStorage,
  saveSearchResult,
  setIsPlayerOpened,
} from '@/store/slices';
import { Film } from '@/types';
import { getKey } from '@/utils';

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

  const togglePopup = () => {
    dispatch(setIsPlayerOpened(!isPlayerOpened));
  };

  useEffect(() => {
    if (!selectedFilmId) return;

    const key = getKey(selectedFilmId);

    if (elasticStorage[key]) {
      setFilm(elasticStorage[key] as Film);

      return;
    }

    getFilmById(EMPTY_STRING).then(({ data }) => {
      if (!data) return;

      setFilm(data);
      dispatch(saveSearchResult({ key, result: data }));
    });
  }, [selectedFilmId]);

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

export default PopupPlayer;
