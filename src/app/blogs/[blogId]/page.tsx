import BlogDetailsCard from '@/components/ui/BlogDetailsCard';
import { Blog } from '@/types';
import React from 'react';

export const generateStaticParams = async() =>{

    const res = await fetch("http://localhost:5000/blogs");
    const blogs = await res.json();
  
    return blogs.slice(0,3).map((blog:Blog) => ({

        blogId: blog.id

    }))
}


// generate MetaData dynamic title name change
export async function generateMetadata({params}: {params: Promise <{blogId: string}>} ){

     const {blogId} = await params;
   const res = await fetch(`http://localhost:5000/blogs/${blogId}`)
   const blog = await res.json();


    return{
        title: blog.title,
        description: blog.description,
    }
}




const BlogDetailsPage = async({params}: {params: Promise <{blogId: string}>} ) => {
   const {blogId} = await params;
   const res = await fetch(`http://localhost:5000/blogs/${blogId}`)
   const blog = await res.json();
   console.log(blog);
    return (
        <div className='p-2'>

            <BlogDetailsCard blog={blog} /> 

        </div>
    );
};

export default BlogDetailsPage;