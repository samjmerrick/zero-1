import Link from "next/link";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useState } from "react";
import Image from "next/image";

dayjs.extend(relativeTime);

export default function BlogCard(props: { matter: BlogFrontmatter }) {
  function formatDate(date: string) {
    return dayjs().to(new Date(date));
  }

  const [hover, setHover] = useState(false);

  const matter = props.matter;

  return (
    <Link
      href={`/blog/${matter.slug}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className=" rounded-md bg-zinc-50">
        <Image
          src={matter.image}
          className="rounded-t-md"
          alt={matter.title}
          width={600}
          height={500}
        />
        <div className="py-3 px-6">
          <p className="text-sm text-zinc-500" id="articleDate">
            {formatDate(matter.date) ?? "date"}
          </p>

          <h3 className="py-2 text-2xl font-bold">{matter.title}</h3>

          <p className="pb-2">{matter.summary}</p>
          <p className={`text-xs ${hover ? " text-blue-700" : null}`}>
            <span className="underline">Read More</span> →
          </p>
        </div>
      </div>
    </Link>
  );
}
