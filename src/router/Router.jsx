import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Communites from './Communites';
import Information from './Information';
import Main from './../information/pages/Main';
import Introduction from "./../information/pages/Introduction";
import Personnel from './../information/pages/Personnel';
import History from './../information/pages/History';
import Record from './../information/pages/Record';
import Application from './../information/pages/Application';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Information />}>
                    <Route path='' element={<Main />}></Route>
                    <Route path='/introduction' element={<Introduction />}></Route>
                    <Route path='/personnel' element={<Personnel />}></Route>
                    <Route path='/history' element={<History />}></Route>
                    <Route path='/record' element={<Record />}></Route>
                    <Route path='/application' element={<Application />}></Route>
                </Route>
                <Route path='/communites' element={<Communites/>}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;