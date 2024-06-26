import { postReducer } from "@/app/reducers/postReducer";
import { Post } from "@/app/types/Post";
import { ReactNode, createContext, useContext, useEffect, useReducer } from "react";

type PostContextType = {
    posts: Post[];
    addPost: (title: string, body: string) => void;
    deletePost: (id: number) => void;
}

let number = 0;
const STORAGE_KEY = 'postContextContent';

export const PostContext = createContext<PostContextType | null>(null);

export function PostProvider({ children }: { children: ReactNode }) {

    const [posts ,dispacth] = useReducer(
        postReducer, 
        JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
    );

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
    }, [posts]);

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



export const usePost = () => useContext(PostContext);