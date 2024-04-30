import { title } from "process";
import { Post } from "../types/Post";

type AddAction = {
    type: 'add';
    payload: {
        title: string;
        body: string;
    }
}

type removeAction = {
    type: 'remove';
    payload: {
        id: number
    }
}

let id_number = 0;

type PostActions = AddAction | removeAction;

export const postReducer = (posts: Post[], action: PostActions) => {
    switch(action.type){
        case 'add':
            return [...posts, {
                id: id_number++,
                title: action.payload.title,
                body: action.payload.body
            }]
        case 'remove': 
            return posts.filter(item => item.id !== action.payload.id);
        default:
            return posts;
    }
}