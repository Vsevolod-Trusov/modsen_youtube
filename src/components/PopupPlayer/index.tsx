import React, { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { FrameSkeletonLoader } from '@/components';
import { useTypedSelector } from '@/hooks';
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
  // const { data, isLoading } = useGetFilmByIdQuery(selectedFilmId);

  const [film, setFilm] = useState<Film>({} as Film);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const isPlayerOpened = useTypedSelector(getIsPlayerOpened);
  const dispatch = useDispatch();

  const togglePopup = () => {
    dispatch(setIsPlayerOpened(!isPlayerOpened));
  };

  useEffect(() => {
    setIsLoading(true);
    setFilm({} as Film);
    const controller = new AbortController();
    fetch('../../../film.json', {
      signal: controller.signal,
    })
      .then((res) => {
        if (res.status === 200) return res.json();
        else {
          return Promise.reject(res);
        }
      })
      .then((data) => {
        setFilm(data);
      })
      .catch((e) => {
        if (e?.name === 'AbortError') return;
      })
      .finally(() => {
        setIsLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, []);

  // useEffect(() => {
  //   localStorage.setItem('film', JSON.stringify(data));
  // }, [data]);

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
