import React, { Component } from 'react'

class SearchBar extends Component {
    state = { term: '' }

    onInputChange = (event) => {
        this.setState({
            term: event.target.value
        })
    }

    onEnter = (event) => {
        event.preventDefault()
        //TODO: make a call to callback from parent component
    }


    render() {
        return (
        <div className="ui segment">
            <form className="ui form" onSubmit={this.onEnter}>
                <input type="text" placeholder="Search GIPHY..." value={this.state.term} onChange={this.onInputChange} />
            </form>
            {console.log(this.state.term)}
        </div>
        )
    }
}

export default SearchBar