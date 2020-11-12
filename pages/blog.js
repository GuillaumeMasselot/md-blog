import Layout from "components/Layout";
import SEO from "components/Seo";
import ArticlePreview from "components/ArticlePreview"
import { getSortedPosts } from "utils/posts";

export default function Portfolio({ posts }) {
  return (
    <Layout>
      <SEO title="All posts" />
      <div className="uppercase text-center tracking-wide text-4xl mb-10">Derniers articles</div>
      {posts.map(({ frontmatter: { title, description, date, author, miniature }, slug }) => (
        <div key={slug}>
          <ArticlePreview title={title} description={description} date={date} author={author} miniature={miniature} slug={slug} />
          <br/>
        </div>
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