import Link from "next/link";
import { getAllSortedPostData } from "../api/posts";
import Container from "../components/Container";
import Label from "../components/Label";
import { Page } from "../components/Page";

export default function Blog({ allBlogData }) {
  return (
    <Page meta={{ title: "Blog" }}>
      <Container>
        <h2 className="pt-20 text-center">Latest Articles</h2>
        <div className=" grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {allBlogData.map(({ id, title, summary, tags, image }) => (
            <div className=" rounded-md bg-zinc-50">
              <img src={image} className="rounded-t-md" />
              <div className="py-3 px-6">
                <h3>{title}</h3>
                <p className="h-12">
                  {tags.map((tag) => (
                    <Label>{tag}</Label>
                  ))}
                </p>
                <p>{summary}</p>
                <Link href={`/blog/${id}`}>Read More</Link>
              </div>
            </div>
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
