import React, { useState } from 'react'

const Like = ({likeP,dislikeP}) => {
    const [like,setLike] = useState(likeP);
    const [dislike,setDisLike] = useState(dislikeP);
    const [likeD,setLikeD] = useState(false);
    const [dislikeD,setDisLikeD] = useState(false);

    const increaseOrDec = () =>{
     setLike(pre=>likeD?pre-1:pre+1);
     if(likeD){
      setDisLike(dislike+1);
      setDisLikeD(true)

     }else
     setDisLike(dislike-1);
     setLikeD(!likeD)
    }
    const increaseOrDecS = () =>{
       setDisLike(pre=>dislikeD?pre-1:pre+1);
       if(dislikeD){
        setLike(like+1);
        setLikeD(true);
       }
       else{
        setLike(like-1)
       }
       setDisLikeD(!dislikeD)
    }
 
  return (
    <>
    <button onClick={increaseOrDec} className={likeD?"like-button":"liked"}>Like {like}</button>
    <button onClick={increaseOrDecS} className={dislikeD?"dislike-button":"disliked"}>DisLike {dislike}</button>
    <style>{`
        .like-button, .dislike-button {
          font-size: 1rem;
          padding: 5px 10px;
          color: #585858;
          border: none;
          background: transparent;
          cursor: pointer;
        }

        .liked, .disliked {
          font-weight: bold;
          color: #1565c0;
        }
      `}</style>
    </>
  )
}

export default Like;