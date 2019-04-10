import React from 'react'

const GiphyDetail = (props) => {
    console.log(props)
    if (!props.giphy) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <img className="ui image" src={props.giphy.images.original.url} alt={props.giphy.title} />
        </div>
    )
}

export default GiphyDetail

// src={props.giphy.images.original.url} alt={props.giphy.title}