import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Container } from '@material-ui/core';
import Header from './components/header/Header';
import Definations from './components/definations/Definations';
// https://api.dictionaryapi.dev/api/v2/entries/<language_code>/<word>




function App() {

  const [meaning, setmeaning] = useState([]);
  const [word, setword] = useState("");
  const[category,setcategory]=useState('en');
  const dictApi = async () => {
    try {
      const data = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`);
      setmeaning(data.data);
      console.log(data);
    }
    catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dictApi();
  }, [category,word])
  return (

    <div className="App" style={{ height: '100vh' }}>
      <Container maxWidth='md' style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>

        <Header 
          category={category}
          setcategory={setcategory}
          word={word}
          setword={setword}
        />
        <Definations
        word={word}
        category={category}
        meaning={meaning}/>
      </Container>

    </div>
  );
}

export default App;
