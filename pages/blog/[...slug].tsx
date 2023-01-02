import Container from "components/Container";
import { Page } from "components/Page";
import { formatSlug, getFileBySlug, getFiles } from "lib/mdx";

export async function getStaticPaths() {
  const posts = getFiles("blog");
  return {
    paths: posts.map((p) => ({
      params: {
        slug: formatSlug(p).split("/"),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = await getFileBySlug("blog", params.slug.join("/"));

  return {
    props: {
      post,
    },
  };
}

export default function Post({ post }) {
  return (
    <Page meta={{ title: post.frontMatter.title }}>
      <Container>
        <div className="prose-xl prose mx-auto pt-10">
          <div className="flex flex-row space-x-2 text-sm text-zinc-500">
            <p className="">{post.frontMatter.date}</p>
            <p> | </p>
            <p className="">{post.frontMatter.readingTime}</p>
          </div>

          <h1 className="text-4xl">{post.frontMatter.title}</h1>

          <img src={post.frontMatter.image} className="rounded-md border" />

          <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
        </div>
      </Container>
    </Page>
  );
}
