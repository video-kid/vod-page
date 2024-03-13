import { useContext } from 'react';
import cover from '../../assets/pigeon.png';
import { Modal } from '../Modal/Modal';
import { ModalContext } from '../../context/modalContext';
import Video from '../Video/Video';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Thumbnail = ({ title, description }: any) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { setModalComponent, closeModal } = useContext<any>(ModalContext);
  return (
    <button
      onClick={() => {
        setModalComponent(
          <Modal
            closingHandler={closeModal}
            title={title}
            description={description}>
            <Video />
          </Modal>
        );
      }}>
      <picture>
        <source
          srcSet={cover}
          media='(orientation: portrait)'
        />
        <img
          src={cover}
          alt='pigeon'
        />
      </picture>
      <h5>Pigeon</h5>
    </button>
  );
};

export default Thumbnail;
