import { InputHTMLAttributes, Ref } from "react";

import styles from "@/src/shared/ui/Input/styles/Input.module.scss";

interface InputModel extends InputHTMLAttributes<HTMLInputElement> {
  keep?: unknown;
  ref?: Ref<HTMLInputElement>;
}

const Input = ({
  value,
  onChange,
  placeholder = "Placeholder",
  ref,
  ...props
}: InputModel) => {
  return (
    <div className={styles.inputContainer}>
      <input
        ref={ref}
        className={styles.inputContainer__input}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
};

export default Input;
