"use client"

import BlogCard from "@/components/ui/BlogCard";
import Spinner from "@/components/ui/Spinner";
import { useGetBlogsQuery } from "@/redux/apis/blogs.slice";
import { Blog } from "@/types";
import { Metadata } from "next";
import React from "react";

// export const metadata:Metadata = {
//   title: "NexaBlogs | Blogs"
// }

const BlogsPage =  () => {
  // const res = await fetch("http://localhost:5000/blogs", {
  //   cache: "no-store"
  // });
  // const blogs = await res.json();

  // console.log(blogs);


    // data fetch with redux toolkit 
  const {data:blogs, isLoading} = useGetBlogsQuery({})

  if(isLoading) {
    return <Spinner></Spinner>
  }
 

  console.log("redux data is:", blogs);
 



  return (
    <div className="w-[95%] mx-auto">
      <h1 className="text-3xl text-center my-5 font-bold">
        Explore All <span className="text-teal-600">Blogs</span>
      </h1>
      <p className="text-center text-gray-400 w-2/5 mx-auto">
        <i>
          Dive into the fascinating world of quantum computing, where unlocking
          unprecedented computational power.
        </i>
      </p>

      <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 ">
       {
            blogs?.map((blog:Blog) => <BlogCard key={blog.id} blog={blog}></BlogCard>)
        } 
      </div>
    </div>
  );
};

export default BlogsPage;
