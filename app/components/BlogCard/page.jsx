const BlogCard = ({ title, description, image, link }) => {
  return (
    <div className="border border-gray-300 p-4 m-4 rounded-lg shadow-md w-full max-w-xs md:max-w-sm lg:max-w-md text-center">
      <img src={image} alt={title} className="w-full h-auto rounded" />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="mb-4">{description}</p>
        <a href={link} className="text-blue-600 hover:underline">
          Read more
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
