import '../css/GiphyItem.css'
import React from 'react'

const GiphyItem = (props) => {
    return (
        <div onClick={() => props.onGiphySelect(props.giphy)} className="giphy-item item">
            <img className="ui image" src={props.giphy.images.original.url} alt={props.giphy.title} />
            <div className="content">
                <h4 className="description">{props.giphy.title}</h4>
            </div>
        </div>
    )
}

export default GiphyItem