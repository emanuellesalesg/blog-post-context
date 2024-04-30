import { Post } from "@/app/types/Post";
import { ReactNode, createContext, useState } from "react";

type PostContextType = {
    posts: Post[];
    addPost: (title: string, body: string) => void;
    deletePost: (id: number) => void;
}

let number = 0;

export const PostContext = createContext<PostContextType | null>(null);

export function PostProvider({ children }: { children: ReactNode }) {

    const [ posts, setPosts ] = useState<Post[]>([]);

    function addPost(title: string, body: string){
        number++;
        setPosts([...posts, {id: number, title, body}]);
    }

    function deletePost(id: number){
        setPosts(posts.filter(item => item.id !== id));
    }

    return (
        <PostContext.Provider value={{posts, addPost, deletePost}}>
            {children}
        </PostContext.Provider>
    );
}