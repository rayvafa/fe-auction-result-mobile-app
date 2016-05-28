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

	render() {
		return (
			<TaskList
				todos={ this.state.todos }
			/>
		);
	}

}

AppRegistry.registerComponent('main', () => PluralTodo);
