let React = require('react-native');
let {
	AppRegistry,
	Component,
	Text
	} = React;
import TaskList from './src/TaskList.js';

class PluralTodo extends Component {

	constructor(props, context) {
		super(props, context);
		this.state = {
			todos: [
				{
					task: 'Learn React Native'
				}
			]
		};
	}

	render() {
		return (
			<TaskList />
		);
	}

}

AppRegistry.registerComponent('main', () => PluralTodo);
