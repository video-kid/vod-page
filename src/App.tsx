import stylex from '@stylexjs/stylex';
import { globalTokens as $, text } from './styles/globalTokens.stylex';
import ModalProvider from './context/modalContext';
import { GalleryPage } from './Pages/Gallery/GalleryPage';

function App() {
  return (
    <ModalProvider>
      <main {...stylex.props(styles.main)}>
        <GalleryPage />
      </main>
    </ModalProvider>
  );
}

export default App;

const DARK_MODE = '@media (prefers-color-scheme: dark)' as const;
const MEDIA_MOBILE = '@media (max-width: 700px)' as const;

const styles = stylex.create({
  main: {
    margin: '0 auto',
    padding: '2em 3em',
    minWidth: $.minWidth,
    maxWidth: $.maxWidth,
    fontSize: {
      default: text.p,
      [MEDIA_MOBILE]: text.sm,
    },
    border: '1px solid black',
    backgroundColor: {
      default: '#ffffff',
      [DARK_MODE]: '#000000',
    },
    color: {
      default: '#000000',
      [DARK_MODE]: '#ffffff',
    },
  },
});
