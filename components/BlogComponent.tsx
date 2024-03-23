'use client';

import { IBlog, IBlogResponse } from '@/types';
import React, { useEffect, useState } from 'react';
import { SingleBlog } from './SingleBlog';
import useAPI from '@/hooks/useAPI';
import PageLoader from './PageLoader';
import Link from 'next/link';

interface IProps {
  blogs: IBlogResponse;
}

const BlogComponent: React.FC<IProps> = ({ blogs }) => {
  const [offset, setOffset] = useState<number>(blogs.offset);
  const [limit] = useState<number>(blogs.limit);
  const [blogsResp, setBlogsResp] = useState<IBlogResponse>(blogs);
  const [loading, setLoading] = useState<boolean>(false);
  const { getBlogs } = useAPI();

  const handlePagination = async (isNext: boolean) => {
    try {
      setLoading(true);
      const newOffset = isNext ? offset + 1 : offset - 1;
      const resp = await getBlogs({ offSet: newOffset * limit, limit });
      setBlogsResp(resp);
      setOffset(newOffset);
    } catch (error) {}
    setLoading(false);
  };

  return (
    <PageLoader loading={loading}>
      <div className="w-[90%] sm:w-[80%] m-auto mt-10">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-10 ">
          {blogsResp.blogs.map((blog: IBlog) => (
            <Link href={`/blog/${blog.id}`} key={blog.id}>
              <SingleBlog blog={blog} />
            </Link>
          ))}
        </div>
        <div className="my-10 flex gap-3 items-end justify-end ">
          <div className="flex items-center gap-3">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => handlePagination(false)}
              disabled={offset === 0}
            >
              Prev
            </button>
            <h1 className="font-bold">
              {blogsResp.blogs.length < limit
                ? `Showing ${offset * limit + 1} to ${offset * limit + blogsResp.blogs.length} of ${
                    blogsResp.total_blogs
                  }`
                : `Showing ${offset * limit + 1} to ${offset * limit + blogsResp.blogs.length} of ${
                    blogsResp.total_blogs
                  } `}
            </h1>
            <button
              disabled={blogsResp.blogs.length < limit}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => handlePagination(true)}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </PageLoader>
  );
};

export default BlogComponent;
