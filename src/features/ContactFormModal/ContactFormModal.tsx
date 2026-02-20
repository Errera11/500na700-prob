"use client";

import { useState } from "react";

import styles from "@/src/features/ContactFormModal/styles/ContactFormModal.module.scss";

import Button from "@/src/shared/ui/Button/Button";
import ContactForm from "./ContactForm/ContactForm";
import { createPortal } from "react-dom";

function ContactFormModal() {
  const [open, setOpen] = useState(false);

  function openeModal() {
    setOpen(true);
  }

  function closeModal() {
    setOpen(false);
  }

  return (
    <>
      <Button onClick={openeModal}>Связаться с нами</Button>

      {open &&
        createPortal(
          <div className={styles.contactFormModal}>
            <div className={styles.contactFormModal__form}>
              <ContactForm onClose={closeModal} />
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}

export default ContactFormModal;
