import React from 'react'

const GiphyDetail = (props) => {
    console.log(props.giphy)
    return (
        <div>
            <img className="ui image"  />
        </div>
    )
}

export default GiphyDetail

// src={props.giphy.images.original.url} alt={props.giphy.title}