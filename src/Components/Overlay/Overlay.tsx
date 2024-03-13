// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Overlay = ({ children, onClick }: any) => {
  return (
    <div>
      <div onClick={onClick}></div>
      {children}
    </div>
  );
};
