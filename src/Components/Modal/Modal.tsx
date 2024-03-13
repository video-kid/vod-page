import { removeSpaces } from '../../utils/utils';

export const Modal = ({
  children,
  title,
  description,
  closingHandler,
}: // eslint-disable-next-line @typescript-eslint/no-explicit-any
any) => {
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
