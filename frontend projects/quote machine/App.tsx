import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const fetchNewQuote = async () => {
    try {
      const response = await fetch('https://type.fit/api/quotes');
      const data = await response.json();
      
      const randomIndex = Math.floor(Math.random() * data.length);
      const randomQuote = data[randomIndex];
      
      setQuote(randomQuote.text);
      setAuthor(randomQuote.author || 'unknown');
    
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchNewQuote();
  }, []);

  return (
    <div className="quoteBox">
      <p id='text'>{quote}</p>
      <p id='author'>{author}</p>
      <button id='new-quote' onClick={fetchNewQuote}>New Quote</button>
    </div>
  );
}

export default App;
