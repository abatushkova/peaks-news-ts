import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from '../../store/globalStore';
import { Home } from '../Home/Home';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { Bookmarks } from '../Bookmarks/Bookmarks';
import { SearchResult } from '../SearchResult/SearchResult';
import { Article } from '../Article/Article';
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
          <Route path="/article/:id" element={<Article />} />
        </Routes>
      </BrowserRouter>
      <Footer /> 
    </Provider>
  );
}

export default App;
