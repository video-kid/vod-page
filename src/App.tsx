import stylex from '@stylexjs/stylex';
import { globalTokens as $, text } from './styles/globalTokens.stylex';

function App() {
  return <main {...stylex.props(styles.main)}>aaa</main>;
}

export default App;

const DARK_MODE = '@media (prefers-color-scheme: dark)' as const;
const MEDIA_MOBILE = '@media (max-width: 700px)' as const;

const styles = stylex.create({
  main: {
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
