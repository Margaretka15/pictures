import React from 'react';
import SearchBar from './SearchBar';
import axios from 'axios';

class App extends React.Component {

    onSearchSubmit(term) {
        axios.get('https://api.unsplash.com/search/photos', {
            params: {
                query: term
            },
            headers: {
                Authorization: 'Client-ID r0lkH_tkZm7uOITE-aw0CAr7FoRKQJJyqKNRCDCz5Go'
            }
        }).then((response) => console.log(response));
    }

    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
            </div>
        );
    }
}

export default App;


