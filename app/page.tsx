"use client"

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NextLink from 'next/link';

export default function App() {
  return (
    <Router>
      <div className='w-full h-full flex flex-col justify-start items-start gap-4 p-4'>
        <ul className='w-full flex justify-center items-center bg-purple-400'>
          <li className='m-4'>
            <Link to="/">Home</Link>
          </li>
          <li className='m-4'>
            <Link to="/about">About</Link>
          </li>
          <li className='m-4'>
            <Link to="/topics">Topics</Link>
          </li>
          <li className='m-4'>
            <NextLink href="/settings">Settings (SSR)</NextLink>
          </li>
        </ul>

        <Routes>
          <Route path="/about" element={<h1>About</h1>} />
          <Route path="/topics" element={<h1>Topics</h1>} />
          <Route path="/" element={<h1>Home</h1>} />
        </Routes>
      </div>
    </Router>
  );
}
