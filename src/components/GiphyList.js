import React from 'react'

const GiphyList = (props) => {
    console.log(props)
    props.giphys.map((giphy) => {
        console.log(giphy)
    })
    return (
        <div>
            GiphyList
        </div>
    )
}

export default GiphyList