export default function TabButton({ children, onClickFunc}) {
  return (
    <li>
      <button onClick={onClickFunc}>{children}</button>
    </li>
  );
}
