import React from 'react';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import {UnsplashService} from "../unsplash/UnsplashService";

class App extends React.Component {

    state = {images: []}

    unsplashService = new UnsplashService();

     onSearchSubmit = async (term) => {
        const response = await this.unsplashService.get(term);
        this.setState({images: response});
    }

    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                {/*Found {this.state.images.length} pictures.*/}
                <ImageList images={this.state.images} />
            </div>
        );
    }
}

export default App;


