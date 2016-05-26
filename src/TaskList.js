import React from 'react-native';

const {
	Text,
	View
} = React;

class TaskList extends React.Component {
	render()  {
		return (
			<View style={styles.container}>
				<Text>This is a TaskList!</Text>
			</View>
		);
	}
}

const styles = React.StyleSheet.create({
	container: {
		paddingTop: 40
	}
});

export default TaskList;