import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

import { setSearchField, requestKitties } from '../actions'

const mapStateToProps = state => {
    return {
        searchField: state.searchKitties.searchField,
        kitties : state.requestKitties.kitties,
        isPending: state.requestKitties.isPending,
        error: state.requestKitties.error
    }
}

const mapDisapatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestKitties: () => dispatch(requestKitties()) 
    }
}

class App extends Component {
    componentDidMount() {
        this.props.onRequestKitties()
    }

    render() {
        const { searchField, onSearchChange, kitties, isPending} = this.props;
        const filteredCats = kitties.filter(cat => {
            return cat.name.toLowerCase().includes(searchField.toLowerCase());
        });

        if (isPending) {
            return <h1>Loading</h1>
        } else {
            return (
                <div className='tc'>
                    <h1>KittyFriends</h1>
                    <SearchBox searchChange={onSearchChange} />
                    <Scroll>
                        <ErrorBoundry>
                            <CardList cats={filteredCats} />
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
        }
    }
}

export default connect(mapStateToProps, mapDisapatchToProps)(App);