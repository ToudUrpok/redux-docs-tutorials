import { useEffect, useState } from "react"
import { postAPI } from "../services/PostService"
import PostItem from "./PostItem"
import { IPost } from "../models/IPost";

const PostContainer = () => {
    const [limit, setLimit] = useState(30);
    const { data: posts, error, isLoading, refetch } = postAPI.useGetPostsQuery(limit)
    const [createPost, {isLoading: isCreatePostLoading, isError: isCreatePostError, error: createPostError}] = postAPI.useAddNewPostMutation()
    const [deletePost, {isLoading: isDeletePostLoading, isError: isDeletePostError, error: deletePostError}] = postAPI.useDeletePostMutation()
    const [updatePost, {isLoading: isUpdatePostLoading, isError: isUpdatePostError, error: updatePostError}] = postAPI.useUpdatePostMutation()

    const handleCreate = async () => {
        const title = prompt()
        await createPost({title, body: title} as IPost)
    }

    const handleDelete = async (post: IPost) => {
        try {
            await deletePost(post).unwrap()
        } catch (error) {
            console.error('Failed to delete the post: ', error)
        }
    }

    const handleUpdate = async (post: IPost) => {
        await updatePost(post)
    }

    return (
        <div>
            <button onClick={handleCreate}>Add new post</button>
            {isLoading && <h1>Is Loading</h1>}
            {error && <h1>Error</h1>}
            {posts && posts.map(post => 
                <PostItem key={post.id} post={post} remove={handleDelete} edit={handleUpdate}/>    
            )}
        </div>
    )
}

export default PostContainer