import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Bookmarks from './pages/Bookmarks/Bookmarks';
import SearchResult from './pages/SearchResult/SearchResult';
import Article from './pages/Article/Article';
import './App.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/bookmarks" element={<Bookmarks />}></Route>
        <Route path="/search-result" element={<SearchResult />}></Route>
        <Route path="/articleID" element={<Article />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
