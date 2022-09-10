import React from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { SearchTagProvider } from './context/search-tag/search-tag.context';

// const rootElement = document.getElementById('root');

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
     <SearchTagProvider>
      <App />
      </SearchTagProvider>
    </BrowserRouter>
  </React.StrictMode>,
);

// render(
//   <React.StrictMode>
//     <BrowserRouter>
//      <SearchTagProvider>
//       <App />
//       </SearchTagProvider>
//     </BrowserRouter>
//   </React.StrictMode>,
//   rootElement
// );

