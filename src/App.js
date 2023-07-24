import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Item from './Item';

function App() {

  const [articles, setArticles] = useState([])
  const [bg, setBg] = useState(true)

  useEffect(() => {
    axios.get('https://api.spaceflightnewsapi.net/v4/blogs/')
      .then(res => setArticles(res.data.results))
  }, [])

  useEffect(() => {
    console.log(articles)
  }, [articles])

  return (
    <div className="App">
      <main>

        <h1>Space News</h1>
        <div className="container">
          {articles.map(item => (
            <Item 
            item={item}
            key={item.id}
            bg={bg}/>
          ))}

        </div>

      </main>
    </div>
  );
}

export default App;
