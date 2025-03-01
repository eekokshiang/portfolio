import React, { useEffect, useState } from "react";
import { ReactComponent as CrossIcon } from "../../assets/svgs/cross-icon.svg";
import "./Modal.scss";

import useWindowSize from "../../hooks/useWindowResize";

const Modal = ({ isOpen, onClose, project }) => {
  const { width } = useWindowSize();
  const [scrollY, setScrollY] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isOpen) {
      setScrollY(window.scrollY);
      document.body.style.position = "fixed";
      document.body.style.top = `-${window.scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";

      // Simulate loading delay
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 500); // Adjust delay as needed

      return () => clearTimeout(timer);
    } else {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.overflow = "auto";

      window.requestAnimationFrame(() => {
        window.scrollTo({ top: scrollY, behavior: "instant" });
      });
      setIsLoading(true); // Reset loading state when closing modal
    }

    return () => {
      if (!isOpen) {
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.overflow = "auto";

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
          {isLoading ? (
            <div className="loader">/// Loading...</div>
          ) : (
            <div
              className="desktop-modal-container"
              onClick={(e) => e.stopPropagation()}
            >
              <button className="desktop-close-button" onClick={onClose}>
                <CrossIcon />
              </button>
              <div className="desktop-modal-content">{project.content}</div>
            </div>
          )}
        </div>
      ) : (
        <div className="modal-overlay" onClick={onClose}>
          {isLoading ? (
            <div className="loader">/// Loading...</div>
          ) : (
            <div
              className="modal-container"
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-button" onClick={onClose}>
                <CrossIcon />
              </button>
              <div className="modal-content">{project.content}</div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Modal;
