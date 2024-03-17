import stylex from '@stylexjs/stylex';

import { useContext } from 'react';

import { Modal } from '../Modal/Modal';
import { ModalContext, modalContextProps } from '../../context/modalContext';
import Video from '../Video/Video';
import { movie } from '../../types/movie';

type thumbnailProps = {
  movie: movie;
};

const Thumbnail = ({ movie }: thumbnailProps) => {
  const { showModal, closeModal } = useContext<modalContextProps>(ModalContext);
  return (
    <button
      onClick={() => {
        showModal(
          <Modal
            closingHandler={closeModal}
            title={movie.episodeTitle}
            description={movie.description}>
            <Video
              videoLink={movie.movie}
              cover={movie.cover}
              nextEpisodeLink={movie.nextEpisodeLink}
            />
          </Modal>
        );
      }}
      {...stylex.props(styles.thumbnail)}>
      <picture>
        <source
          srcSet={movie.cover}
          media='(orientation: portrait)'
        />
        <img
          src={movie.cover}
          alt='pigeon'
          {...stylex.props(styles.image)}
        />
      </picture>
      <h5>{movie.episodeTitle}</h5>
    </button>
  );
};

export default Thumbnail;

const styles = stylex.create({
  thumbnail: {
    border: 'none',
    backgroundColor: 'unset',
    display: 'flex',
    flexDirection: 'column',
  },
  image: {
    width: '100%',
    objectFit: 'cover',
    objectPosition: 'center center',
  },
});
