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
    <Page meta={{ title: post.title }}>
      <Container>
        <div className="prose prose-xl mx-auto pt-10">
          <p className="text-sm text-zinc-500">{post.date}</p>
          <h1 className="text-4xl">{post.title}</h1>
          <img src={post.image} className="rounded-md border" />

          <br />
          <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
        </div>
      </Container>
    </Page>
  );
}
