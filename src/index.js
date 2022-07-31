import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


import { createRoot } from 'react-dom/client';

import './fonts/Circular_Black.ttf';
import './fonts/Circular_Bold.ttf';
import './fonts/Circular_Medium.ttf';
import './fonts/Circular_Book.ttf';

//const container = document.getElementById('app');
//const root = createRoot(container); // createRoot(container!) if you use TypeScript
//root.render(<App />);

ReactDOM.render(<App />, document.getElementById('root'));

