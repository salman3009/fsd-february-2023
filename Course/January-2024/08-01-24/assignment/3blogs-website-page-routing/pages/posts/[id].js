import React from 'react';
import { useRouter } from 'next/router';

function PostDetail() {
  // Complete the function
   const router = useRouter();
   const {id} = router.query;
    return (<>
     <h1>Post Details: {id}</h1>
    </>)
}

export default PostDetail;
