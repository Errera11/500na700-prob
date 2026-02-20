import Link from "next/link";
import { LinkProps } from "next/link";

import styles from "@/src/shared/ui/CustomLink/styles/CustomLink.module.scss";

interface CustomLinkModel extends LinkProps {
  children?: React.ReactNode;
}

function CustomLink({ children, ...props }: CustomLinkModel) {
  return (
    <Link {...props} className={styles.customLink}>
      {children}
    </Link>
  );
}

export default CustomLink;
