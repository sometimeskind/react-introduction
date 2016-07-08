const appEl = document.getElementById('app');
const Embedded = require('./Embedded.jsx');

const className = "test123";

const test = () => (
  <div className="test">
    <p>test</p>
    {true === false && (
      <p>not shown</p>
    )}
    <Embedded text="hello" />
    <div className={className}></div>
  </div>
);

const testEl = React.createElement(test);

ReactDOM.render(testEl, appEl);
