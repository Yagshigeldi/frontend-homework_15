import React from "react";

const Popup = ({ children, onClose, isShow = false }) => {
  return (
    isShow && (
      <>
        <div
          onClick={onClose}
          className="fixed bg-black/40 top-0 let-0 w-full h-screen z-40"
        ></div>
        <div className="z-40 fixed top-1/2 left-1/2 -translate-1/2">
          {children}
        </div>
      </>
    )
  );
};

export default Popup;
