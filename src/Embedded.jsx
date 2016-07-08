const Embedded = {
    displayName: 'Embedded',

    propTypes: {
      text: React.PropTypes.string.isRequired,
    },

    getInitialState() {
        return {
            hello: 789,
        };
    },

    componentDidMount() {
        this.onHello();
    },

    onHello() {
        this.setState({
            hello: 444,
        });
    },

    render() {
      return (
        <div>
            this is an embedded component, and here is some {this.props.text}<br/>
            hello is {this.state.hello}
        </div>
      );
    },
}

module.exports = React.createClass();
