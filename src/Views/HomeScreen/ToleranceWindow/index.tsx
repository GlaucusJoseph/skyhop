import { memo, useState } from "react";
import { ClockIcon } from "../../../assets/svg";
import { ToggleButton } from "../../../components";

const ToleranceWindow = memo(({ onClick }: { onClick: () => void }) => {
  const [isToleranceWindonOn, setIsToleranceWindonOn] = useState(true);
  console.log("Check the render");

  return (
    <>
      <label className="special-text-bold">Tolerance Window:</label>
      <div className="row">
        <div className="col-6 d-flex align-items-center">
          <div className="toggle-container">
            <ToggleButton
              isOpen={isToleranceWindonOn}
              setIsOpen={setIsToleranceWindonOn}
            />
            <span className="ms-2 special-text">
              TOGGLE {isToleranceWindonOn ? "on" : "off"}
            </span>
          </div>
        </div>
        <div className="col-1 vertical-divider"></div>
        <div className="col-5 d-flex align-items-center">
          <ClockIcon width={"30"} height={"30"} />
          <span className="ms-2 special-text" onClick={onClick}>
            Select Tolerance Level
          </span>
        </div>
      </div>
    </>
  );
});

export default ToleranceWindow;
