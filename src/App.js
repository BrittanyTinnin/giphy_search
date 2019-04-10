import React from 'react'
import giphy from './api/giphy'
import SearchBar from './components/SearchBar'
import GiphyList from './components/GiphyList';


class App extends React.Component {
    state = { giphyList: [] }
   
    onSubmitInput = async (term) => {
        const response = await giphy.get('/v1/gifs/search', {
            params: {
                q: term,
                limit: 5
            }
        })
        .catch(err => console.log(err.response))

        this.setState({ giphyList: response.data.data })
    }

    render() {
        return (
        <div className="ui container" style={{ marginTop: '10px' }}>
            <SearchBar onSubmitInput={this.onSubmitInput} />
            <GiphyList giphys={this.state.giphyList}/>
        </div>
        )
    }
}

export default App