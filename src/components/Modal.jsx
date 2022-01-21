import React, { useCallback, useRef, useState } from "react";

const Modal = (props) => {
  const { children, forcedWidth, onModalClose, clickOutsideClose } = props;

  const [mousedownOn, setMousedownOn] = useState(false);

  const mainModalRef = useRef(null);
  const closeModal = useCallback(
    (e) => {
      if (e.target === mainModalRef.current && onModalClose) {
        onModalClose();
      }
    },
    [onModalClose, mainModalRef.current]
  );

  return (
    <div
      className="modal"
      onMouseDown={
        clickOutsideClose === true
          ? (e) => {
              if (e.target === mainModalRef.current) {
                setMousedownOn(true);
              }
            }
          : null
      }
      onMouseUp={
        clickOutsideClose === true
          ? (e) => {
              if (mousedownOn) {
                closeModal(e);
              }
              setMousedownOn(false);
            }
          : null
      }
      ref={mainModalRef}
    >
      <div
        className="modal-body"
        style={{
          maxHeight: "95vh",
          overflow: "auto",
          ...(forcedWidth ? { width: forcedWidth } : {}),
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
