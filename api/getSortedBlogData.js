import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogDirectory = path.join(process.cwd(), "data/blog");

export function getSortedBlogData() {
  // Get file names under /blog
  const fileNames = fs.readdirSync(blogDirectory);

  const allPostsData = fileNames.map((fileName) => {
    // Remove ".mdx" from file name to get id
    const id = fileName.replace(/\.mdx$/, "");

    // Read markdown file as string
    const fullPath = path.join(blogDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });
  // Sort posts by date
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
