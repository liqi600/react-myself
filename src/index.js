import React from './react'
import ReactDOM from './react-dom'

/**
 * 函数组件
 */
function Welcome( props ) {
    return <h1>Hello, {props.name}</h1>;
}

function App() {
    return (
        <div>
            <Welcome name="Sara" />
            <Welcome name="Cahal" />
            <Welcome name="Edite" />
        </div>
    );
}
ReactDOM.render(
    <App />,
    document.getElementById( 'root' )
);

/**
 * 类组件
 */
// class Welcome extends React.Component {
//     render() {
//         return <h1>Hello, {this.props.name}</h1>;
//     }
// }

// class App extends React.Component {
//     render() {
//         return (
//             <div>
//                 <Welcome name="Sara" />
//                 <Welcome name="Cahal" />
//                 <Welcome name="Edite" />
//             </div>
//         );
//     }
// }
// ReactDOM.render(
//     <App />,
//     document.getElementById( 'root' )
// );

