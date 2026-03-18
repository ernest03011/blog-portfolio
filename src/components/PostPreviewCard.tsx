import type { CollectionEntry } from "astro:content";

type Post = CollectionEntry<"blog">["data"] & {
  slug: CollectionEntry<"blog">["id"];
};

type Props = {
  post: Post;
  variant?: "minimal" | "moderate" | "complete";
  cardDesign?: "default" | "primary" | "secondary";
};

export default function PostPreviewCard({
  post,
  variant = "complete",
  cardDesign = "default",
}: Props) {
  const variantConfig = {
    minimal: { showDescription: false, showImage: false },
    moderate: { showDescription: true, showImage: false },
    complete: { showDescription: true, showImage: true },
  };

  const cardDesignConfig = {
    default: "border-divider rounded-lg border-1",
    primary:
      "bg-surface-elevated hover:bg-surface-hover border-divider rounded-lg border-1 border-solid shadow-lg",
    secondary:
      "hover:rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-1 hover:ring-1 hover:ring-border hover:ring-accent transition-all duration-300",
  };

  const { showDescription } = variantConfig[variant];
  const cardContainerDesign = cardDesignConfig[cardDesign];

  return (
    <article className={`group my-1 w-full p-5 md:my-4 ${cardContainerDesign}`}>
      <h4 className="text-primary group-hover:text-accent mb-3 font-semibold">
        <a href={`/blog/${post.slug}`}>{post.title}</a>
      </h4>

      <div>
        {showDescription && (
          <p className="text-foreground my-4 pl-0.5 text-base/7">
            {post.description}
          </p>
        )}
      </div>
      <div>
        <p className="">{/* <FormattedDate date={post.pubDate} /> */}</p>
        <a
          className="group-hover:text-accent flex items-center"
          href={`/blog/${post.slug}`}
        >
          Read
        </a>
      </div>
    </article>
  );
}
