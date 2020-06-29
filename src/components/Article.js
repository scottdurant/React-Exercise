import React from 'react';

function Article(props) {
    return (
        <div>
            <span onClick={() => window.open(props.url, "_blank")}>{props.title}</span>
        </div>
    )
}

export default Article;