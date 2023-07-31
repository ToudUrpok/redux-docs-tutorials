import { postAPI } from "../services/PostService"
import PostItem from "./PostItem"

const PostContainer2 = () => {
    const { data: posts, error, isLoading } = postAPI.useGetPostsQuery(10)
    
    return (
        <div>
            {/* {isLoading && <h1>Is Loading</h1>}
            {error && <h1>Error</h1>}
            {posts && posts.map(post => 
                <PostItem key={post.id} post={post}/>    
            )} */}
        </div>
    )
}

export default PostContainer2