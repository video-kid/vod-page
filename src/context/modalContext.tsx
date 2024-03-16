import { ReactNode, createContext, useState } from 'react';
import { Overlay } from '../Components/Overlay/Overlay';

export type modalContextProps = {
  showModal: (content: ReactNode) => void;
  closeModal: () => void;
};

const initValues = {
  showModal: () => null,
  closeModal: () => null,
};

export const ModalContext = createContext<modalContextProps>(initValues);

const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [modalComponent, setModalComponent] = useState<ReactNode | null>(null);
  const showModal = (content: ReactNode) => setModalComponent(content);
  const closeModal = () => setModalComponent(null);

  return (
    <ModalContext.Provider value={{ showModal, closeModal }}>
      {children}
      {modalComponent ? (
        <Overlay onClick={closeModal}>{modalComponent}</Overlay>
      ) : null}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
