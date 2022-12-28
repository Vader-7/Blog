import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import {Start} from '../components/pages/Start';
import {Articles} from '../components/pages/Articles';
import { Header } from '../components/layout/Header';
import { Nav } from '../components/layout/Nav';
import { Footer } from '../components/layout/Footer';
import { Sidebar } from '../components/layout/Sidebar';

export const Rutas = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Nav/>
            <section id='content' className='content'>
                <Routes>
                    <Route path="/" exact element={<Start/>} />
                    <Route path="/start" element={<Start/>} />
                    <Route path="/articles" element={<Articles/>} />
                </Routes>
            </section>
            <Sidebar/>
            <Footer/>
        </BrowserRouter>
    );
}

