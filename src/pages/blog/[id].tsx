import Image from "next/image";

import styles from "@/src/pages/blog/styles/BlogId.module.scss";

import { formatDate } from "@/src/shared/lib/date";
import { fetchPostById, fetchPosts } from "@/src/entities/api";
import { PostModel } from "@/src/entities/model/PostModel";

interface Props {
  params: Promise<{ id: PostModel["id"] }>;
}

export async function generateStaticParams() {
  const posts = await fetchPosts();

  return posts.map(({ id }) => ({
    id,
  }));
}

export default async function BlogById({ params }: Props) {
  const { id } = await params;
  const { image_url, title, description, date } =
    (await fetchPostById(id)) ?? {};

  return (
    <article className={`${styles.blogId} default-layout`}>
      <div className={styles.blogId__img}>
        <Image src={image_url} alt="Post img" fill objectFit="cover" />
      </div>

      <div className={styles.blogId__textContent}>
        <div className={styles.blogId__textMain}>
          <h1 className={styles.blogId__title}>{title}</h1>
          <span className={styles.blogId__date}>{formatDate(date)}</span>
        </div>

        <div className={styles.blogId__description}>{description}</div>
      </div>
    </article>
  );
}
