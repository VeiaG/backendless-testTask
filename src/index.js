import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './app/app';
import { HashRouter, Route, Routes, Navigate} from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));

//I'm using hashRouter only to have this app work on github pages

root.render(
  <React.StrictMode>
    <HashRouter >
      <Routes>
        <Route path="*" element={<Navigate to="/load" replace relative="path"/>}/>
        <Route
            path=":tabID"
            element={<App/>}
        />;
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

