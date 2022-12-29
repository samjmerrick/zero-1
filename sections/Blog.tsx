import Link from "next/link";
import ImageCard from "../components/ImageCard";
import Label from "../components/Label";
import Section from "../components/Section";

export default function Blog({ allBlogData }) {
  return (
    <Section id="Blog">
      <h2 className="text-center">Latest Blogs</h2>
      <div className=" grid grid-cols-3 gap-5">
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
    </Section>
  );
}
