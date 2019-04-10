import React from 'react'
import SearchBar from './components/SearchBar'


class App extends React.Component {
    //setup axios request to api based on search term
   

    render() {
        return (
        <div className="ui container" style={{ marginTop: '10px' }}>
            <SearchBar />
        </div>
        )
    }
}

export default App