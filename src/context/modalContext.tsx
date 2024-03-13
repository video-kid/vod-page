import { createContext, useState } from 'react';
import { Overlay } from '../Components/Overlay/Overlay';

export const ModalContext = createContext<unknown>(null);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ModalProvider = ({ children }: any) => {
  const [modalComponent, setModalComponent] = useState<unknown>(null);
  const closeModal = () => setModalComponent(null);
  return (
    <ModalContext.Provider value={{ setModalComponent, closeModal }}>
      {children}
      {modalComponent ? (
        <Overlay onClick={closeModal}>{modalComponent}</Overlay>
      ) : null}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
