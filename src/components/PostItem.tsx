import { IPost } from '../models/IPost'

interface PostItemParams {
    post: IPost,
    remove: (post: IPost) => void,
    edit: (post: IPost) => void
}

const PostItem = (params : PostItemParams) => {
    const {
        post,
        remove,
        edit
    } = params
    
    const handleRemove = (event: React.MouseEvent) => {
        event.stopPropagation()
        remove(post)
    }

    const handleEdit = (event: React.MouseEvent) => {
        const newTitle = prompt() || ""
        edit({...post, title: newTitle})
    }

    return (
        <div onClick={handleEdit}>
            {post.id}. {post.title}
            <div>{post.body}</div>
            <button onClick={handleRemove}>delete</button>
        </div>
    )
}

export default PostItem