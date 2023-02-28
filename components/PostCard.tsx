import React from 'react'
import { Interface } from 'readline'

interface post{
    title: string;
    except: string;
}

const PostCard = ({posts}:{posts:post}) => {
 return (
    <div>
        {posts.title}
        {posts.except}
    </div>
 )
}

export default PostCard