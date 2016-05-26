let React = require('react-native');
let {
  AppRegistry,
  Component,
  Text
} = React;

class PluralTodo extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {

    };
  }

  render() {
     return (
        <Text>Hello there!</Text>
     );
  }

}

AppRegistry.registerComponent('main', () => PluralTodo);
