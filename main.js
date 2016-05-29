let React = require('react-native');

let {
	AppRegistry,
	Component
} = React;

import TaskList from './src/TaskList.js';

class PluralTodo extends Component {

	constructor(props, context) {
		super(props, context);

		this.state = {
			todos: [
				{
					task: 'Learn React Native'
				},
				{
					task: 'Unlearn React Native'
				}
			]
		};
	}

	onAddStarted() {
		console.log('onAddStarted');
	}

	render() {
		return (
			<TaskList
				todos={ this.state.todos }
				onAddStarted={ this.onAddStarted.bind(this) }
			/>
		);
	}

}

AppRegistry.registerComponent('main', () => PluralTodo);
