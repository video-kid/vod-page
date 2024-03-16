import { ReactNode } from 'react';

type overlayProps = {
  children: ReactNode;
  onClick: () => void;
};

export const Overlay = ({ children, onClick }: overlayProps) => {
  return (
    <div>
      <div onClick={onClick}></div>
      {children}
    </div>
  );
};
