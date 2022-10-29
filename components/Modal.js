import React from "react";

const Layer = () => {
  return <div>Layer</div>;
};

function Modal() {
  return (
    <div>
      {React.createPortal(<Layer />, document.getElementById("modals"))}
    </div>
  );
}

export default Modal;
