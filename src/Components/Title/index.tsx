import "./index.css";

interface ToggleButtonProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ isOpen, setIsOpen }) => {
  const toggleSwitch = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="">
      <div
        className={`toggle-switch ${isOpen ? "on" : "off"}`}
        onClick={toggleSwitch}
      >
        <div className={`slider ${isOpen ? "on" : "off"}`}></div>
      </div>
    </div>
  );
};

export default ToggleButton;
