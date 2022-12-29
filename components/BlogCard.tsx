import Link from "next/link";
import { title } from "process";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export default function BlogCard(props: { matter: BlogFrontmatter }) {
  function formatDate(date: string) {
    return dayjs().to(new Date(date));
  }

  const matter = props.matter;

  return (
    <Link href={`/blog/${matter.id}`}>
      <div className=" rounded-md bg-zinc-50">
        <img src={matter.image} className="rounded-t-md" />
        <div className="py-3 px-6">
          <p className="text-sm text-zinc-500" id="articleDate">
            {formatDate(matter.date) ?? "date"}
          </p>

          <h3 className="py-2 text-2xl font-bold">{title}</h3>

          <p>{matter.summary}</p>
          <p className=" text-xs  hover:text-blue-700">
            <span className="underline">Read More</span> →
          </p>
        </div>
      </div>
    </Link>
  );
}
