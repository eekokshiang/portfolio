import React, { useEffect, useState } from "react";
import { ReactComponent as CrossIcon } from "../../assets/svgs/cross-icon.svg";
import "./Modal.scss";

import useWindowSize from "../../hooks/useWindowResize";

const Modal = ({ isOpen, onClose, project }) => {
  const { width } = useWindowSize();
  const [scrollY, setScrollY] = useState(0); // ✅ Store the scroll position

  useEffect(() => {
    if (isOpen) {
      setScrollY(window.scrollY); // ✅ Save the exact scroll position
      document.body.style.position = "fixed";
      document.body.style.top = `-${window.scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden"; // ✅ Prevent background scroll
    } else {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.overflow = "auto";

      // ✅ Instantly restore scroll position without animation
      window.requestAnimationFrame(() => {
        window.scrollTo({ top: scrollY, behavior: "instant" });
      });
    }

    return () => {
      if (!isOpen) {
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.overflow = "auto";

        // ✅ Ensures position is restored instantly
        window.requestAnimationFrame(() => {
          window.scrollTo({ top: scrollY, behavior: "instant" });
        });
      }
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  return (
    <>
      {width > 768 ? (
        <div className="desktop-modal-overlay" onClick={onClose}>
          <div
            className="desktop-modal-container"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="desktop-close-button" onClick={onClose}>
              <CrossIcon />
            </button>
            <div className="desktop-modal-content">{project.content}</div>
          </div>
        </div>
      ) : (
        <div className="modal-overlay" onClick={onClose}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={onClose}>
              <CrossIcon />
            </button>
            <div className="modal-content">{project.content}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
