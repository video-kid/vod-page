import stylex from '@stylexjs/stylex';

import { ReactNode } from 'react';

type overlayProps = {
  children: ReactNode;
  onClick: () => void;
};

export const Overlay = ({ children, onClick }: overlayProps) => {
  return (
    <div {...stylex.props(styles.overlay)}>
      <div
        onClick={onClick}
        {...stylex.props(styles.background)}></div>
      {children}
    </div>
  );
};

const styles = stylex.create({
  overlay: {
    position: 'fixed',
    zIndex: 1,
    inset: '0',
    height: '100vh',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    backgroundColor: '#ffffff',
    opacity: 0.7,
    display: 'block',
    content: "''",
    position: 'absolute',
    inset: '0',
  },
});
