import React from './react'
import ReactDOM from './react-dom'

class Counter extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            num: 1
        }
    }

    componentWillMount() {
        console.log( 'willmount' );
    }

    componentDidMount() {
        console.log( 'didmount' );
    }

    componentWillUpdate() {
        console.log( 'willupdate' );
    }

    componentDidUpdate() {
        console.log( 'didupdate' );
    }

    onClick() {
        this.setState( { num: this.state.num + 1 } );
    }

    render() {
        return (
            <div>
                <h1>count: { this.state.num }</h1>
                <button onClick={ () => this.onClick()}>add</button>
            </div>
        );
    }
}

ReactDOM.render(
    <Counter />,
    document.getElementById( 'root' )
);
