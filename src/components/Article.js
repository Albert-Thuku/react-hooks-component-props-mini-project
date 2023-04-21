import React from "react";

function Article({title, date='January 1, 1970', preview, minute}){
    return (
        <article>
            <h3>{title}</h3>
            <small>{date} {minute} min read</small>
            <p>{preview}</p>
        </article>
    );
}

export default Article;