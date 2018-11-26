import ReactDOM from 'react-dom'

import './helloMessage';
import './index.scss';

var mountNode = document.getElementById('root')

ReactDOM.render(
  <HelloMessage name="React" />,
  mountNode
);
