import { PostContext } from "@/contexts/PostContext";
import { useContext, useState } from "react";

export function Header(){
    const postCtx = useContext(PostContext);

    const [titleInput, setTitleInput] = useState("");
    const [bodyInput, setBodyInput] = useState("");

    function handleAddButton(){
        if(titleInput && bodyInput){
            postCtx?.addPost(titleInput, bodyInput);
            setTitleInput("");
            setBodyInput("");
        }
    }

    return(
        <div className="border my-2 max-w-screen-md">
            <h1 className="text-2xl p-3">Posts</h1>

            <div className="flex flex-col boder border-white p-3 gap-4">
                <input type="text" placeholder="Title" 
                className="border-b p-2 text-black text-xl"
                value={titleInput}
                onChange={e => setTitleInput(e.target.value)}
                />
                <textarea placeholder="Text..."
                className="h-24 border p-2 text-black text-xl"
                value={bodyInput}
                onChange={e => setBodyInput(e.target.value)}
                ></textarea>
                <button className="bg-blue-500 p-3 text-white rounded-md hover:bg-blue-600"
                onClick={handleAddButton}>Add</button>
            </div>
        </div>
    );
}