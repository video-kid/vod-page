import { ReactNode } from 'react';
import { removeSpaces } from '../../utils/utils';

type modalProps = {
  children: ReactNode;
  title: string;
  description: string;
  closingHandler: () => void;
};

export const Modal = ({
  children,
  title,
  description,
  closingHandler,
}: modalProps) => {
  return (
    <div
      aria-labelledby={removeSpaces(title)}
      aria-describedby={description}
      role='dialog'
      aria-modal='true'>
      <h2 id={removeSpaces(title)}>{title}</h2>
      <button
        type='button'
        onClick={() => closingHandler()}>
        x
      </button>
      {children}
    </div>
  );
};
