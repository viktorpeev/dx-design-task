import { useState, useEffect } from 'react';
import { db } from '../firebase/firebase-config';
import {collection, getDocs } from 'firebase/firestore';
import './styles.scss';

function App() {
  const [getNews, setNews] = useState([]);
  const newsCollectionRef = collection(db, 'BreakingNews');

  useEffect(() => {
    const getNews = async () => {
        const data = await getDocs(newsCollectionRef);
        setNews(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    getNews();
}, [newsCollectionRef])
  return (
    <div className="App">
    {getNews.map((news) => { return <h1 key={news.id}>headline:{news.headline}</h1>})}
    </div>
  );
}

export default App;
