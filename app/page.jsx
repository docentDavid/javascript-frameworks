import BlogCard from "./components/BlogCard/page";
import blogPosts from "./blogPosts.json";

const HomePage = () => {
  return (
    <div className="flex flex-wrap justify-center md:justify-around p-4 md:p-8">
      {blogPosts.map((post) => (
        <BlogCard
          key={post.id}
          title={post.title}
          description={post.description}
          image={post.image}
          link={post.link}
        />
      ))}
    </div>
  );
};

export default HomePage;
