import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const blogDirectory = path.join(process.cwd(), "data/blog");

export async function getPostData(id: string) {
  const fullPath = path.join(blogDirectory, `${id}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}

export function getAllPostIds() {
  // Get file names under /blog
  const fileNames = fs.readdirSync(blogDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        // Remove ".mdx" from file name to get id
        id: fileName.replace(/\.mdx$/, ""),
      },
    };
  });
}

export function getAllSortedPostData() {
  const ids = getAllPostIds();

  const allPostsData = ids.map((post) => {
    const id = post.params.id;

    // Read markdown file as string
    const fullPath = path.join(blogDirectory, `${id}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    } as BlogFrontmatter;
  });

  // @ts-ignore
  return allPostsData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
}
