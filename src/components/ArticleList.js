import React from "react";
import Article from "./Article";

function ArticleList({post}){
    return (
        <main>
            {post.map((art)=>{
                return <Article title={art.title} date={art.date} minute={art.minutes} preview={art.preview}/>
            })}
        </main>
    );
}

export default ArticleList;