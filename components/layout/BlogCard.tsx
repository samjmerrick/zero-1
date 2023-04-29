import Link from "next/link";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Image from "next/image";

dayjs.extend(relativeTime);

export default function BlogCard(props: { matter: BlogFrontmatter }) {
  function formatDate(date: string) {
    return dayjs().to(new Date(date));
  }

  const matter = props.matter;

  return (
    <Link href={`/blog/${matter.slug}`}>
      <div className=" min-h-full rounded-md border border-neutral-600 bg-neutral-900 ">
        <Image
          src={matter.image}
          className="rounded-t-md"
          alt={matter.title}
          width={600}
          height={500}
        />
        <div className="py-3 px-6">
          <p className="text-sm text-neutral-300" id="articleDate">
            {formatDate(matter.date) ?? "date"}
          </p>

          <h3 className="py-2 text-2xl font-semibold ">{matter.title}</h3>

          <p className="pb-2 text-neutral-300">{matter.summary}</p>
        </div>
      </div>
    </Link>
  );
}
