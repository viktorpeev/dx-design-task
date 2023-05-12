import { useState, useEffect } from 'react';
import { db } from '../firebase/firebase-config';
import { collection, getDocs } from 'firebase/firestore';
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
      {/* {getNews.map((news) => { return <h1 key={news.id}>headline:{news.headline}</h1>})} */}

      <div className='header'>
        <h1>My Logo</h1>
        <div className='header__socials'>
          <a className='header__socials--facebook' href='/'>z</a>
          <a className='header__socials--twitter' href='/'>z</a>
          <a className='header__socials--instagram' href='/'>z</a>
          <a className='header__socials--subscribe' href='/'>z</a>
        </div>
      </div>
      <div className='navbar'>
        <div className='navbar__navigation'>
          <a className='navbar__navigation--news' href='/'>News</a>
          <a className='navbar__navigation--sex' href='/'>Sex</a>
          <a className='navbar__navigation--specials' href='/'>Special Features</a>
          <a className='navbar__navigation--tech' href='/'>Technology</a>
          <a className='navbar__navigation--sport' href='/'>Sport</a>
          <a className='navbar__navigation--analysis' href='/'>Analysis</a>
        </div>
        <div className='navbar__utility'>
          {/* weather and search */}
        </div>
      </div>
      <div className='newsType'>
      <div className='newsType__mainANDlatest'>
        <div className='newsType__mainANDlatest__main'>
          <img className='newsType__mainANDlatest__main--image' alt='main_img'/>
          <h1 className='newsType__mainANDlatest__main--headline'>lorem</h1>
          <p className='newsType__mainANDlatest__main--description'>lorem</p>
        </div>
        <div className='newsType__mainANDlatest__latest'>
          <div className='newsType__mainANDlatest__latest__row'>
          <h1 className='newsType__mainANDlatest__latest__row--headline'>lorem</h1>
          <p className='newsType__mainANDlatest__latest__row--publisherANDdate'>lorem</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
