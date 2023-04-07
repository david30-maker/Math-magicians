import React, { useState, useEffect } from 'react';
import classes from '../quote.module.css';

// return (
//   <div className={classes.quoteContent}>
//     <div className={classes.quote}>
//       <Quote />
//     </div>
//     </div>
//     );

const Quote = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => {
      setMounted(false);
    };
  }, []);

  useEffect(() => {
    const fetchQuote = async () => {
      setLoading(true);
      setError(false);

      try {
        const res = await fetch('https://api.api-ninjas.com/v1/quotes?category=happiness', {
          headers: {
            'X-Api-Key': 'jzzfew774Kqg+nf2AkhCAw==pIwj1VNrBEBwQ0lW',
            'Content-Type': 'application/json',
          },
        });

        const data = await res.json();
        if (mounted) {
          setQuote(data[0].quote);
          setAuthor(data[0].author);
          setLoading(false);
        }
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchQuote();
  }, [mounted]);

  return (
    <div className={classes.content}>
      <div className={classes.quoteContent}>
        <div className={classes.quote}>
          <Quote />
        </div>
      </div>
      {loading && <div>Loading...</div>}
      {error && <div>Something went wrong...</div>}
      {loading && !error && (
        <div>
          <div className={classes.quoteContent}>
            <div className={classes.quote}>
              <Quote />
            </div>
          </div>
          <p>
            &#34;
            {quote}
            &#34;
            {author}
          </p>
        </div>
      )}
    </div>
  );
};

export default Quote;
