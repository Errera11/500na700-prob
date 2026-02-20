import React, { InputHTMLAttributes, Ref } from "react";

import styles from "@/src/shared/ui/Checkbox/styles/Checkbox.module.scss";

interface CheckboxModel extends InputHTMLAttributes<HTMLInputElement> {
  label: React.ReactNode;
  ref?: Ref<HTMLInputElement>;
}

const Checkbox = ({ label, checked, onChange, ...props }: CheckboxModel) => {
  return (
    <label className={styles.checkbox}>
      <input
        type="checkbox"
        id="checkbox"
        className={styles.checkbox__input}
        checked={checked}
        onChange={onChange}
        {...props}
      />
      {label && (
        <label className={styles.checkbox__label} htmlFor="checkbox">
          <sub className={styles.checkbox__labelText}>{label} </sub>
        </label>
      )}
    </label>
  );
};

export default Checkbox;
