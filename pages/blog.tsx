import { getAllSortedPostData } from "../api/posts";
import BlogCard from "../components/BlogCard";
import Container from "../components/Container";
import { Page } from "../components/Page";

export default function Blog(props: { allBlogData: BlogFrontmatter[] }) {
  return (
    <Page meta={{ title: "Blog" }}>
      <Container>
        <h2 className="py-20 text-center text-4xl font-bold">
          Latest Articles
        </h2>
        <div className=" grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {props.allBlogData.map((data) => (
            <BlogCard matter={data} />
          ))}
        </div>
      </Container>
    </Page>
  );
}

export async function getStaticProps() {
  const allBlogData = getAllSortedPostData();
  return {
    props: {
      allBlogData,
    },
  };
}
