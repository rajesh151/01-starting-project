export default function TabButton({ children }) {

    function handleButtonOnClick() {
console.log("Click on Button");
    };
  return (
    <li>
      <button onClick={handleButtonOnClick} >{children}</button>
    </li>
  );
}
