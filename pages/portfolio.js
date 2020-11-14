import Layout from "components/Layout";
import SEO from "components/Seo";
import Image from "components/Image"
import { getSortedPics } from "utils/posts";

export default function Portfolio({pics}) {
  return (
    <Layout>
        <SEO title="Portfolio" />
        <div className="uppercase text-center tracking-wide text-4xl mb-10">Portfolio</div>
        <div className="w-full flex flex-wrap justify-center">
          {pics.map(p => (
            <div key={p} className="flex-none bg-cover text-center overflow-hidden mx-2 my-2" title={p}>
              <a href={require(`../content/pics/${p}`)}>
                <Image
                    alt="lala"
                    src={require(`../content/pics/${p}`)}
                    webpSrc={require(`../content/pics/${p}?webp`)}
                    previewSrc={require(`../content/pics/${p}?lqip`)}
                    className="w-64 h-64 object-cover mini shadow-lg"/>
                </a>
            </div>
          ))}
        </div>
    </Layout>
  );
}

export async function getStaticProps() {
    const pics = getSortedPics();
    return {
      props: {
        pics,
      },
    };
}