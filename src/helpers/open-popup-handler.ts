import { setIsPlayerOpened, setSelectedFilmId } from '@/store/slices';
import { IPopupHalper } from '@/types';

const openPopupHandler = ({ dispatch, id }: IPopupHalper) => {
  dispatch(setIsPlayerOpened(true));
  dispatch(setSelectedFilmId(id));
};

export { openPopupHandler };
