let React = require('react-native');

let {
	AppRegistry,
	Component,
	Navigator
} = React;

import TaskList from './src/TaskList.js';
import TaskForm from './src/TaskForm.js';

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
		this.nav.push({
			name: 'taskform'
		});
	}

	onCancel(){
		this.nav.pop();
	}

	onAdd(task){
		this.state.todos.push({task});
		this.setState({todos: this.state.todos});
		this.nav.pop();
	}

	onDone(todo) {
		console.log('task is completed: ' + todo.task);
		const filteredTodos = this.state.todos.filter((filterTodo) => {
			return filterTodo !== todo;
		});
		this.setState({todos: filteredTodos});
	}

	renderScene(route, nav) {
		switch (route.name) {
			case 'taskform':
				return (
					<TaskForm
						onCancel={this.onCancel.bind(this)}
						onAdd={ this.onAdd.bind(this) }
					/>
				);
			default:
				return (
					<TaskList
						todos={ this.state.todos }
						onAddStarted={ this.onAddStarted.bind(this) }
						onDone={ this.onDone.bind(this) }
					/>
				)
		}
	}

	configureScene() {
		return Navigator.SceneConfigs.FloatFromBottom;
	}

	render() {
		return (
			<Navigator
				configureScene={this.configureScene}
				initialRoute={{ name: 'tasklist', index: 0 }}
				ref={ (nav) => {
					this.nav = nav;
				} }
				renderScene={ this.renderScene.bind(this) }
			/>
		);
	}

}

AppRegistry.registerComponent('main', () => PluralTodo);
