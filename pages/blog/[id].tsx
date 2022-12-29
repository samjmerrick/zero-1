import Container from "../../components/Container";
import { getAllPostIds, getPostData } from "../../api/posts";
import { Page } from "../../components/Page";

export default function Post({ postData }) {
  return (
    <Page meta={{ title: postData.title }}>
      <Container>
        <div className="prose prose-xl mx-auto pt-10">
          <p className="text-sm text-zinc-500">{postData.date}</p>
          <h1 className="text-4xl">{postData.title}</h1>
          <img src={postData.image} className="rounded-md border" />

          <br />
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </div>
      </Container>
    </Page>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
