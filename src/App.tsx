import stylex from '@stylexjs/stylex';

import { RouterProvider } from 'react-router-dom';
import ModalProvider from './context/modalContext';

import { globalTokens as $, text } from './styles/globalTokens.stylex';
import { routes } from './routes';

function App() {
  return (
    <ModalProvider>
      <main {...stylex.props(styles.main)}>
        <RouterProvider router={routes} />
      </main>
    </ModalProvider>
  );
}

export default App;

const DARK_MODE = '@media (prefers-color-scheme: dark)' as const;
const MEDIA_MOBILE = '@media (max-width: 700px)' as const;

const styles = stylex.create({
  main: {
    minHeight: '100vh',
    margin: '0 auto',
    padding: '2em 3em',
    minWidth: $.minWidth,
    maxWidth: $.maxWidth,
    fontSize: {
      default: text.p,
      [MEDIA_MOBILE]: text.sm,
    },
    backgroundColor: {
      default: '#F0F3F5',
      [DARK_MODE]: 'inherit',
    },
    color: {
      default: '#000000',
      [DARK_MODE]: '#ffffff',
    },
  },
});
