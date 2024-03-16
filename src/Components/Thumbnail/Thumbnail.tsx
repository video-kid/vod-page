import stylex from '@stylexjs/stylex';

import { useContext } from 'react';
import cover from '../../assets/pigeon.png';
import { Modal } from '../Modal/Modal';
import { ModalContext, modalContextProps } from '../../context/modalContext';
import Video from '../Video/Video';

type thumbnailProps = {
  title: string;
  description: string;
};

const Thumbnail = ({ title, description }: thumbnailProps) => {
  const { showModal, closeModal } = useContext<modalContextProps>(ModalContext);
  return (
    <button
      onClick={() => {
        showModal(
          <Modal
            closingHandler={closeModal}
            title={title}
            description={description}>
            <Video />
          </Modal>
        );
      }}
      {...stylex.props(styles.thumbnail)}>
      <picture>
        <source
          srcSet={cover}
          media='(orientation: portrait)'
        />
        <img
          src={cover}
          alt='pigeon'
          {...stylex.props(styles.image)}
        />
      </picture>
      <h5>Pigeon</h5>
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
