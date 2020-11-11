import Link from "next/link";

import Layout from "components/Layout";
import SEO from "components/Seo";
import { getSortedPosts } from "utils/posts";
import ArticlePreview from "components/ArticlePreview"

export default function Home({ posts }) {
  return (
    <Layout>
      <SEO title="All posts" />
      {posts.map(({ frontmatter: { title, description, date, author, miniature }, slug }) => (
        <div key={slug}>
          <ArticlePreview title={title} description={description} date={date} author={author} miniature={miniature} slug={slug} />
          <br/>
        </div>
        // <article key={slug}>
        //   <header className="mb-2">
        //     <h3 className="mb-2">
        //       <Link href={"/post/[slug]"} as={`/post/${slug}`}>
        //         <a className="text-4xl font-bold text-orange-600 font-display">
        //           {title}
        //         </a>
        //       </Link>
        //     </h3>
        //     <span className="text-sm">{date} - {author}</span>
        //   </header>
        //   <section>
        //     <p className="mb-8 text-lg">{description}</p>
            
        //   </section>
        // </article>
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = getSortedPosts();

  return {
    props: {
      posts,
    },
  };
}
