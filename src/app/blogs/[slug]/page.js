import ClientPage from './ClientPage';

export async function generateMetadata({ params }) {
  // Fetch the blog by slug from your Laravel API
  const res = await fetch(`/api/blogs/${params.slug}`);
  const data = await res.json();
  const blog = data.data[0];

  return {
    title: blog?.meta_title || blog?.title,
    description: blog?.meta_description || '',
  };
}

export default async function BlogPage({ params }) {
  const res = await fetch(`/api/blogs/${params.slug}`);
  const data = await res.json();
  const blog = data.data[0]; // single blog object

  return <ClientPage blog={blog} />;
}