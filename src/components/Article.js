import React from 'react';

function Article(props) {
    return (
        <div>
            <span><a href={props.url}> {props.title} </a></span>
        </div>
    )
}

export default Article;