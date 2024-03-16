import stylex from '@stylexjs/stylex';

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
      aria-modal='true'
      {...stylex.props(styles.modal)}>
      <h2 id={removeSpaces(title)}>{title}</h2>
      <button
        type='button'
        onClick={() => closingHandler()}
        {...stylex.props(styles.close)}>
        x
      </button>
      {children}
    </div>
  );
};

const styles = stylex.create({
  modal: {
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '20px',
    width: 'fit-content',
    minWidth: '30vw',
    minHeight: '30vh',
    boxShadow: '1px 1px 4px 0px rgba(0, 0, 0, 0.2)',
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
  },
  close: {
    position: 'absolute',
    top: '0',
    right: '0',
    padding: '10px',
  },
});
