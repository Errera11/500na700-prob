import styles from "@/src/widgets/AppFooter/styles/AppFooter.module.scss";

import Logo from "@/src/shared/icons/Logo";

function AppFooter() {
  return (
    <footer className={styles.appFooter}>
      <div className={`${styles.appFooter__content} default-layout`}>
        <div className={styles.appFooter__logoWrapper}>
          <Logo variant="light" />
        </div>
        <h2 className={styles.appFooter__text}>
          Креативное агентство 500na700
        </h2>
      </div>
    </footer>
  );
}

export default AppFooter;
