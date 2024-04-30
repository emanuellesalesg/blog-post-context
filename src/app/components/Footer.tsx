import { usePost } from "@/contexts/PostContext";


export function Footer(){
    
    const postCtx = usePost();
    
    return (
        <footer className="px-4 mt-2 text-sm">
            Total de posts: {postCtx?.posts.length}
        </footer>
    );
}