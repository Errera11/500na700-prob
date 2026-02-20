import Image from "next/image";

import styles from "@/src/features/BlogPost/styles/BlogPost.module.scss";

import { formatDate } from "@/src/shared/lib/date";
import { PostModel } from "@/src/entities/model/PostModel";

function BlogPost({ image_url, title, description, date }: PostModel) {
  return (
    <div className={styles.blogPost}>
      <div className={styles.blogPost__img}>
        <Image src={image_url} alt="blog img" fill objectFit="cover" />
      </div>

      <div className={styles.blogPost__textContent}>
        <h2 className={styles.blogPost__title}>{title}</h2>

        <span className={styles.blogPost__description}>{description}</span>
        <span className={styles.blogPost__date}>{formatDate(date)}</span>
      </div>
    </div>
  );
}

export default BlogPost;
