import BlogCard from "components/layout/BlogCard";
import Container from "components/layout/Container";
import { Page } from "components/layout/Page";
import { getAllFilesFrontMatter } from "lib/mdx";

export default function Blog(props: { posts: BlogFrontmatter[] }) {
  return (
    <Page meta={{ title: "Blog" }}>
      <Container>
        <h2 className="py-20 text-center text-4xl font-bold">
          Latest Articles
        </h2>
        <div className=" grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {props.posts.map((data) => (
            <BlogCard key={data.slug} matter={data} />
          ))}
        </div>
      </Container>
    </Page>
  );
}

export async function getStaticProps() {
  const posts = (await getAllFilesFrontMatter("blog")) as BlogFrontmatter[];

  return { props: { posts } };
}
