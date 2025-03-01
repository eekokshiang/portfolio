import React, { useState } from "react"; // ✅ Add `useState` here
import "./Contact.scss";
import { ReactComponent as CopyIcon } from "../../assets/svgs/copy-icon.svg";

const Contact = () => {
  const [copiedText, setCopiedText] = useState(""); // Track which text was copied

  const copyToClipboard = (text) => {
    if (navigator.clipboard && window.isSecureContext) {
      // ✅ Preferred modern method
      navigator.clipboard
        .writeText(text)
        .then(() => {
          setCopiedText(text);
          setTimeout(() => setCopiedText(""), 600);
        })
        .catch((err) => console.error("Error copying text:", err));
    } else {
      // ✅ Fallback for iOS Safari (prevents shaking)
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.setAttribute("readonly", ""); // ✅ Prevents keyboard pop-up on iOS
      textArea.style.position = "absolute";
      textArea.style.left = "-9999px"; // ✅ Hides textarea from viewport
      textArea.style.top = "0"; // ✅ Prevents scrolling issue
      document.body.appendChild(textArea);

      const selection = document.getSelection();
      const range = document.createRange();
      range.selectNodeContents(textArea);
      selection.removeAllRanges();
      selection.addRange(range);

      try {
        document.execCommand("copy");
        setCopiedText(text);
        setTimeout(() => setCopiedText(""), 600);
      } catch (err) {
        console.error("Fallback: Unable to copy", err);
      }

      selection.removeAllRanges(); // ✅ Clears selection to prevent shaking
      document.body.removeChild(textArea);
    }
  };

  return (
    <>
      <div className="contact-main-container">
        <p className="contact-main-title">Find me on</p>

        <div className="contact-main-wrapper">
          <div className="contact-wrapper">
            <div className="contact-content">
              <span className="contact-title">Email </span>
              <span className="contact-info">shiang_ee@hotmail.com</span>
            </div>

            <div
              onClick={() => copyToClipboard("shiang_ee@hotmail.com")}
              className="copy-button"
            >
              {copiedText === "shiang_ee@hotmail.com" ? (
                <span className="copy-alert">Copied!</span>
              ) : (
                <span className="copy-alert">Copy</span>
              )}
            </div>
          </div>

          <div className="contact-wrapper">
            <div className="contact-content">
              <span className="contact-title">Number</span>
              <span className="contact-info">+6018 3715 493</span>
            </div>
            <div
              onClick={() => copyToClipboard("60183715493")}
              className="copy-button"
            >
              {copiedText === "60183715493" ? (
                <span className="copy-alert">Copied!</span>
              ) : (
                <span className="copy-alert">Copy</span>
              )}
            </div>
          </div>

          <div className="contact-wrapper">
            <div className="contact-content">
              <span className="contact-title">Location</span>
              <span className="contact-info">Malaysia</span>{" "}
            </div>

            <div
              onClick={() =>
                window.open(
                  "https://maps.app.goo.gl/skMfd7kZZk1QNRmP8",
                  "_blank"
                )
              }
              className="copy-button"
            >
              <span className="copy-alert"> Google Map</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
