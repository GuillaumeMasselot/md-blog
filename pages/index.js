import Portfolio from "pages/portfolio"
import { getSortedPics } from "utils/posts";

export default function Home({ pics }) {
  return (
    <Portfolio pics={pics}></Portfolio>
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