import { PostContext } from "@/contexts/PostContext";
import { useContext } from "react";

export function Footer(){
    
    const postCtx = useContext(PostContext);
    
    return (
        <footer className="px-4 mt-2 text-sm">
            Total de posts: {postCtx?.posts.length}
        </footer>
    );
}