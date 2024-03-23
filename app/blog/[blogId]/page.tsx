import { SingleBlog } from '@/components/SingleBlog';
import { API_BASE_URL } from '@/utils/constants';
import { notFound } from 'next/navigation';

async function getBlogById(blogId: string) {
  try {
    const resp = await fetch(`${API_BASE_URL}/${blogId}`);
    return await resp.json();
  } catch (error) {
    notFound();
  }
}

export default async function SingleBlogPage({ params }: any) {
  const blog = await getBlogById(params.blogId);
  return (
    <div className="mt-20 sm:w-[30%] w-[90%] m-auto h-[200px]">
      <SingleBlog blog={blog.blog} />
    </div>
  );
}
