import React from 'react';
import { Navigate, Route, Routes } from 'react-router';
import About from '../pages/About';
import Posts from '../pages/Posts';
import Error from '../pages/Error';
import GetUserIP from './GetUserIP';
import PostIdPage from './../pages/PostIdPage';

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/about" element={<About/>}/>
            <Route path="/ip" element={<GetUserIP/>}/>
            <Route path="/posts" element={<Posts/>}/>
            <Route path="/error" element={<Error/>}/>
            <Route path="/posts/:id" element={<PostIdPage/>}/>
            <Route path="/*" element={<Navigate to="/error" replace />}/>
        </Routes>
    );
};

export default AppRouter;