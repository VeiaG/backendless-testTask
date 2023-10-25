import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './app/app';
import { BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <BrowserRouter >
      <Routes>
        <Route path="*" element={<Navigate to="/load" replace relative="path"/>}/>
        <Route
            path=":tabID"
            element={<App/>}
        />;
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

