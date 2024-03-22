import { useState, useEffect } from 'react'
import './App.css'
const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY;
import DogDisplay from './Components/DogDisplay'
import BanList from './Components/BanList'
import History from './Components/History'

function App() {

  const [currentDog, setCurrentDog] = useState(null);
  const [banList, setBanList] = useState([]);
  const [history, setHistory] = useState([]);
  const [error, setError] = useState("");

  const fetchDog = async () => {
    try {
      const response = await fetch(`https://api.thedogapi.com/v1/images/search?api_key=${ACCESS_KEY}`);
      const [data] = await response.json();
      if (!response.ok) throw new Error(`API call failed: ${response.status}`);
      
      const hasBannedAttributes = banList.some(banItem => {
        const [attributeName, attributeValue] = Object.entries(banItem)[0];
        return data.breeds[0][attributeName] === attributeValue;
      });

      if (!hasBannedAttributes) {
        setCurrentDog(data);
        setHistory(prevHistory => [...prevHistory, data]); 
      } else {
        console.log('Fetching new dog due to ban list filter.');
        fetchDog(); 
      }
    } catch (error) {
      setError(`Failed to fetch dog: ${error.message}`);
    }
  };

  const handleBanAttribute = (attributeName, value) => {
    setBanList(banList.concat({ [attributeName]: value }));
  };
  
  return (
    <div className="whole-page">
      <History history={history} />
      <DogDisplay dog={currentDog} onBan={handleBanAttribute} fetchNewDog={fetchDog} />
      <BanList banList={banList} />
    </div>
  )
}

export default App
