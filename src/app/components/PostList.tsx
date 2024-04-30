import { usePost } from "@/contexts/PostContext";


export function PostList(){
    const postCtx = usePost();

    function deletePost(id: number){
            postCtx?.deletePost(id);
    }
    
    return(
        <div>
            {postCtx?.posts.map(item => 
            <div key={item.id} className="border-b border-blue-300 flex justify-between px-4">
                <div>
                    <div><h1 className="text-xl font-bold mb-2">{item.title}</h1></div>
                    <div><p className="text-sm pb-2">{item.body}</p></div>
                </div>
                <div><button onClick={() => deletePost(item.id)}>Delete</button></div>
            </div>
            
            )}
        </div>
    );
}