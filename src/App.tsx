import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from './store';
import { Home } from './components/Home/Home';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Bookmarks } from './components/Bookmarks/Bookmarks';
import { SearchResult } from './components/SearchResult/SearchResult';
import { Article } from './components/Article/Article';
import './App.scss';

const App = () => {
  return (
    <Provider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all-bookmarks" element={<Bookmarks />} />
          <Route path="/search-results" element={<SearchResult />} />
          <Route path="/articleID" element={<Article />} />
        </Routes>
      </BrowserRouter>
      <Footer /> 
    </Provider>
  );
}

export default App;
