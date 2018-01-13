import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import App from './App';

const RouterComponent = () => {
	return(
		<Router sceneStyle={{ paddingTop: 65 }}>
			<Scene key="decks">
				<Scene key="deckSelection" component={App} title="Deck Selection" />
			</Scene>
		</Router>
	);
};

export default RouterComponent;
