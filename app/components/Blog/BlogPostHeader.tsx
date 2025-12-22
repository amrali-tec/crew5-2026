"use client";

type BlogPostHeaderProps = {
  title: string;
  category: string;
};

export default function BlogPostHeader({
  title,
  category,
}: BlogPostHeaderProps) {
  return (
    <header className="w-full h-[300px] bg-background/80 flex items-center px-6 md:px-12 backdrop-blur-md">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center w-full">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-0">
          {title}
        </h1>
        <span className="text-white/50">{category}</span>
      </div>
    </header>
  );
}
