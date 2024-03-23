import { IBlog } from '@/types';
import { getFormattedDate } from '@/utils/helper';
import Image from 'next/image';
import React from 'react';

interface IProps {
  blog: IBlog;
}

export const SingleBlog: React.FC<IProps> = ({ blog }) => {
  return (
    <div key={blog.id} className="rounded-lg bg-gray-100">
      <div>
        <Image
          className="h-full w-full object-contain rounded-lg"
          src={blog.photo_url}
          alt="Photo_url"
          height={200}
          width={200}
        />
      </div>
      <div className="px-2 py-3">
        <h1 className="font-bold text-teal-700">id: {blog.id}</h1>
        <h1 className="font-semibold">Title: {blog.title}</h1>
        <p className="text-[14px]">Category: {blog.category}</p>
        <p className="text-[14px]">Description: {blog.description}</p>
        <p className="text-[14px]">Created At: {getFormattedDate(blog.created_at)}</p>
      </div>
    </div>
  );
};
