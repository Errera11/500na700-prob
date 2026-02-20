import Link from "next/link";

import styles from "@/src/widgets/Blog/styles/Blog.module.scss";

import { fetchPosts } from "@/src/entities/api";
import BlogPost from "@/src/features/BlogPost/BlogPost";

async function Blog() {
  const data = await fetchPosts();

  const blogList = data.map((blog) => (
    <Link
      href={`/blog/${blog.id}`}
      key={blog.id}
      className={styles.blog__postWrapper}
    >
      <BlogPost {...blog} />
    </Link>
  ));

  return (
    <div className={`${styles.blog} bottom-spacer-wrapper`}>
      <div className="default-layout">
        <h1 className={`${styles.blog__title}`}>Новости</h1>
      </div>
      <div className={styles.blog__list}>{blogList}</div>
    </div>
  );
}

export default Blog;
