"use client"
import {Header} from "@/app/components/Header"
import { Footer } from "./components/Footer";
import { PostProvider } from "@/contexts/PostContext";
import { PostList } from "./components/PostList";

function Page(){
  return (
    <div className="container mx-auto max-w-screen-md">
      <PostProvider>
        <Header />
        <PostList/>
        <Footer/>
      </PostProvider>
    </div>
);
}

export default Page;