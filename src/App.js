import React from 'react'
import giphy from './api/giphy'
import SearchBar from './components/SearchBar'


class App extends React.Component {
    //setup axios request to api based on search term
   
    onSubmitInput = async (term) => {
        const response = await giphy.get('/v1/gifs/search', {
            params: {
                q: term,
                limit: 5
            }
        })
        .catch(err => console.log(err.response))

        console.log(response)
    }

    render() {
        return (
        <div className="ui container" style={{ marginTop: '10px' }}>
            <SearchBar onSubmitInput={this.onSubmitInput} />
        </div>
        )
    }
}

export default App