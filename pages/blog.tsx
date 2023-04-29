import BlogCard from "components/layout/BlogCard";
import Container from "components/layout/Container";
import { getAllFilesFrontMatter } from "lib/mdx";
import Head from "next/head";
import Metatitle from "utils/metadata";

export default function Blog(props: { posts: BlogFrontmatter[] }) {
  return (
    <>
      <Head>
        <title>{Metatitle("Blog")}</title>
      </Head>

      <Container>
        <h2 className="mt-20 py-20 text-center text-4xl font-bold">
          Latest Articles
        </h2>
        <div className=" grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {props.posts.map((data) => (
            <BlogCard key={data.slug} matter={data} />
          ))}
        </div>
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const posts = (await getAllFilesFrontMatter("blog")) as BlogFrontmatter[];

  return { props: { posts } };
}
