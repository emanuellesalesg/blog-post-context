import { postReducer } from "@/app/reducers/postReducer";
import { Post } from "@/app/types/Post";
import { ReactNode, createContext, useReducer } from "react";

type PostContextType = {
    posts: Post[];
    addPost: (title: string, body: string) => void;
    deletePost: (id: number) => void;
}

let number = 0;

export const PostContext = createContext<PostContextType | null>(null);

export function PostProvider({ children }: { children: ReactNode }) {

    const [posts ,dispacth] = useReducer(postReducer, []);

    function addPost(title: string, body: string){
        dispacth({type: 'add', payload:{title, body}});
    }

    function deletePost(id: number){
        dispacth({type: 'remove', payload:{id}});
    }

    return (
        <PostContext.Provider value={{posts, addPost, deletePost}}>
            {children}
        </PostContext.Provider>
    );
}