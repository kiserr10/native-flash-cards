import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux'; //helps to connect to all connect tags throughout app and they have access to state
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';

class App extends Component {
	render(){
		return (
			<Provider store={createStore(reducers)}>
				<View>
					<Text>Flash Cards</Text>
				</View>
			</Provider>
		);
	}
}

export default App;
