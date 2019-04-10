import React from 'react'
import GiphyItem from '../components/GiphyItem'

const GiphyList = (props) => {
    console.log(props.giphys)
    const renderedList = props.giphys.map((giphy) => {
        return <GiphyItem key={giphy.id} giphy={giphy} />
    })
    return (
        <div className="ui relaxed divided list">
            {renderedList}
        </div>
    )
}

export default GiphyList