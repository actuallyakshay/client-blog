import BlogComponent from '@/components/BlogComponent';
import { IBlogResponse, IFilter } from '@/types';
import { API_BASE_URL } from '@/utils/constants';
import { notFound } from 'next/navigation';

async function getBlogs({ limit, offSet }: IFilter) {
  try {
    const resp = await fetch(`${API_BASE_URL}?offset=${offSet}&limit=${limit}`);
    return await resp.json();
  } catch (error) {
    notFound();
  }
}

export default async function Home() {
  const blogs: IBlogResponse = await getBlogs({ limit: 9, offSet: 0 });

  return (
    <main>
      <BlogComponent blogs={blogs} />
    </main>
  );
}
