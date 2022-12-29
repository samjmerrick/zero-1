import Link from "next/link";
import { getAllSortedPostData } from "../api/posts";
import Container from "../components/Container";
import { Page } from "../components/Page";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export default function Blog({ allBlogData }) {
  function formatDate(date: string) {
    return dayjs().to(new Date(date));
  }

  return (
    <Page meta={{ title: "Blog" }}>
      <Container>
        <h2 className="py-20 text-center text-4xl font-bold">
          Latest Articles
        </h2>
        <div className=" grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {allBlogData.map(({ id, title, summary, tags, image, date }) => (
            <Link href={`/blog/${id}`}>
              <div className=" rounded-md bg-zinc-50">
                <img src={image} className="rounded-t-md" />
                <div className="py-3 px-6">
                  <p className="text-sm text-zinc-500" id="articleDate">
                    {formatDate(date) ?? "date"}
                  </p>

                  <h3 className="py-2 text-2xl font-bold">{title}</h3>

                  <p>{summary}</p>
                  <p className=" text-xs  hover:text-blue-700">
                    <span className="underline">Read More</span> →
                  </p>
                </div>
              </div>
            </Link>
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
