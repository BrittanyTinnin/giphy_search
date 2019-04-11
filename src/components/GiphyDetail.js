import React from 'react'

class GiphyDetail extends React.Component {
        
        render() {
        if (!this.props.giphy) {
            return (
            <div className="ui active dimmer">            
                <div className="ui text loader">
                    Loading...
                </div>
            </div>
            )
        }

       

        return (
            <div ref={this.props.findDom} className="text">
                <img className="ui image" src={this.props.giphy.images.original.url} alt={this.props.giphy.title} />
            </div>
        )
    }
}

export default GiphyDetail

