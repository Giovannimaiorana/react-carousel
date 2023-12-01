import TheCard from "../components/TheCard";
const posts = [
  {
    id: 1,
    title: "Titolo del Post",
    image: "https://picsum.photos/id/1015/300/200",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.",
    tags: ["html", "css"],
    published: false,
  },
  {
    id: 2,
    title: "Titolo del Post",
    image: "https://picsum.photos/id/1016/300/200",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.",
    tags: ["js", "css"],
    published: true,
  },
  {
    id: 3,
    title: "Titolo del Post",
    image: "https://picsum.photos/id/1018/300/200",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.",
    tags: ["js", "php"],
    published: true,
  },
  {
    id: 4,
    title: "Titolo del Post",
    image: "https://picsum.photos/id/1019/300/200",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.",
    tags: ["html"],
    published: true,
  },
];

export default function PostList() {
  const publishedPosts = posts.filter((post) => post.published);
  if (publishedPosts.length === 0) {
    return <h1>Non ci sono post</h1>;}
  return (
    <div>
      {publishedPosts.map((post) => (
        <div key={post.id}>
          <TheCard
            title={post.title}
            image={post.image}
            content={post.content}
            tags={post.tags}
            published={post.published}
          />
        </div>
      ))}
    </div>
  );
}
