import { ButtonHTMLAttributes } from "react";

import styles from "@/src/shared/ui/Button/styles/Button.module.scss";

type variant = "white" | "dark" | "default";

interface ButtonModel extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: variant;
}

function Button({ variant = "white", children, ...props }: ButtonModel) {
  const classes = [
    variant === "dark" ? styles.appButton_dark : "",
    variant === "default" ? styles.appButton_default : "",
  ].join(" ");

  return (
    <button className={`${styles.appButton} ${classes}`} {...props}>
      {children}
    </button>
  );
}

export default Button;
