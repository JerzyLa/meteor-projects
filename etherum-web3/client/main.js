import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker'

// creates mini mongo on client side DDP  (Distributed Data Protocol)
import App from './../imports/ui/App'

Meteor.startup(() => {
    ReactDOM.render(<App/>, document.getElementById('app'));
    console.log('Website updated!');
});
