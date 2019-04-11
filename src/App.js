import './css/App.css'
import React from 'react'
import giphy from './api/giphy'
import SearchBar from './components/SearchBar'
import GiphyList from './components/GiphyList';
import GiphyDetail from './components/GiphyDetail'


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = { giphyList: [], selectedGiphy: null }
    }
    
    componentDidMount() {
        this.onSubmitInput('babies')
    }
    
   
   
    onSubmitInput = async (term) => {
        const response = await giphy.get('/v1/gifs/search', {
            params: {
                q: term,
                limit: 10
            }
        })
        .catch(err => console.log(err.response))

        this.setState({ giphyList: response.data.data, selectedGiphy: response.data.data[0] })
    }

    onGiphySelect = (giphy) => {
        this.setState({ selectedGiphy: giphy })
    }

    render() {
        return (
        <div className="ui container" style={{ marginTop: '10px' }}>
            <SearchBar onSubmitInput={this.onSubmitInput} />
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <GiphyDetail giphy={this.state.selectedGiphy}  />
                    </div>
                    <div className="five wide column">
                        <GiphyList giphys={this.state.giphyList} onGiphySelect={this.onGiphySelect} />
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default App