import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import {Start} from '../components/pages/Start';
import {Articles} from '../components/pages/Articles';

export const Rutas = () => {
    return (
        <BrowserRouter>

            <section id='content' className='content'>
                <Routes>
                    <Route path="/" exact element={<Start/>} />
                    <Route path="/start" element={<Start/>} />
                    <Route path="/articles" element={<Articles/>} />
                </Routes>
            </section>

        </BrowserRouter>
    );
}

