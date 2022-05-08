import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from './store';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Bookmarks from './components/Bookmarks/Bookmarks';
import SearchResult from './components/SearchResult/SearchResult';
import Article from './components/Article/Article';
import './App.scss';

const App = () => {
  return (
    <Provider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/all-bookmarks" element={<Bookmarks />}></Route>
          <Route path="/search-result" element={<SearchResult />}></Route>
          <Route path="/articleID" element={<Article />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
