import { useState, useEffect } from "react";
import styles from "./BackToTopButton.module.css";

function BackToTopButton() {
  const [backToTopBtn, setBackToTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopBtn(true);
      } else {
        setBackToTopBtn(false);
      }
    });
  }),
    [];

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {backToTopBtn && (
        <button onClick={scrollUp} className={styles.backToTopButton}>
          <span className="material-symbols-outlined">arrow_upward</span>
        </button>
      )}
    </div>
  );
}

export default BackToTopButton;
