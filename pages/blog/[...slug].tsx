import Container from "components/layout/Container";
import { formatSlug, getFileBySlug, getFiles } from "lib/mdx";
import Head from "next/head";
import Image from "next/image";
import Metatitle from "utils/metadata";

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
    <>
      <Head>
        <title>{Metatitle(post.frontMatter.title)}</title>
      </Head>
      <Container>
        <div className="prose-xl prose prose-invert  mx-auto pt-32">
          <div className="flex flex-row space-x-2 text-sm text-neutral-200">
            <p className="">{post.frontMatter.date}</p>
            <p> | </p>
            <p className="">{post.frontMatter.readingTime}</p>
          </div>

          <h1 className="text-4xl">{post.frontMatter.title}</h1>

          <Image
            src={post.frontMatter.image}
            className="rounded-md border"
            height={600}
            width={1000}
            alt={post.frontMatter.summary}
          />

          <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
        </div>
      </Container>
    </>
  );
}
