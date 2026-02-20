import Link from "next/link";

import styles from "@/src/widgets/AppHeader/styles/AppHeader.module.scss";

import Logo from "@/src/shared/icons/Logo";
import ContactFormModal from "@/src/features/ContactFormModal/ContactFormModal";

function AppHeader() {
  return (
    <header className={styles.appHeader}>
      <div className={`${styles.appHeader__content} default-layout`}>
        <Link href={"/"} className={styles.appHeader__logo}>
          <Logo />
        </Link>

        <ContactFormModal />
      </div>
    </header>
  );
}

export default AppHeader;
