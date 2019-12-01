import React from './react'
import ReactDOM from './react-dom'

const element = (
    <div>
        hello<span>world!</span>
    </div>
);

ReactDOM.render(
    element,
    document.getElementById('root')
);
