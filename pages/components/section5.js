import React, { useState, useEffect } from 'react';

export default function BookRecommendations({ click, setClick, year, setYear }) {
  // State for storing book titles from API
  const [bookTitles, setBookTitles] = useState([]);
  // State to track loading status
  const [loading, setLoading] = useState(true);
  // State for error handling
  const [error, setError] = useState(null);

  // Effect hook to fetch book data when 'click' changes
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true); // Start loading
        setError(null); // Reset any previous errors
        
        const url = 'https://books-recommendation-270k-books.p.rapidapi.com/list';
        const options = {
          method: 'POST',
          headers: {
            'x-rapidapi-key': 'd8ea3011bemsh94792d8164d1bcfp1d5fdfjsn636fe5314fde',
            'x-rapidapi-host': 'books-recommendation-270k-books.p.rapidapi.com',
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: new URLSearchParams({
            page: '1',
            year: `${year}` // Use the current year state
          })
        };

        const response = await fetch(url, options);
        
        // Handle HTTP errors
        if (!response.ok) {
          throw new Error(`Failed to fetch: ${response.status}`);
        }

        const result = await response.json();
        
        // Extract book titles from API response
        setBookTitles(result.result.data.map(item => item.BookTitle));
      } catch (err) {
        setError(err.message); // Store error message
      } finally {
        setLoading(false); // End loading regardless of success/failure
      }
    };

    fetchBooks();
  }, [click]); // Re-run when 'click' changes

  // Display error message if fetch fails
  if (error) return <div className="error-message">Error: {error}</div>;

  // Handler for fetching new recommendations
  function handleFetch() {
    setClick(!click); // Toggle click state to trigger useEffect
    setBookTitles([]); // Clear previous results
  }

  return (
    <div className="book-recommendations">
      {/* Header section */}
      <h1 className="recommendations-title">Choose year for recommendations</h1>
      
      {/* Year selection controls */}
      <div className="year-selector">
        <input 
          type="number" 
          className="year-input"
          value={year} 
          onChange={(e) => setYear(e.target.value)} 
          min="1900" 
          max="2023"
          placeholder="Enter year (1900-2023)"
        />
        <button 
          className="fetch-button" 
          onClick={handleFetch}
          disabled={loading} // Disable during loading
        >
          {loading ? 'Fetching...' : 'Get Recommendations'}
        </button>
      </div>

      {/* Results section */}
      <h2 className="recommendations-header">Recommended Books</h2>
      
      {/* Loading/Results/Empty states */}
      {loading ? (
        <div className="loading-message">
          <div className="spinner"></div>
          Loading recommendations...
        </div>
      ) : bookTitles.length > 0 ? (
        <ul className="book-list">
          {bookTitles.map((title, index) => (
            <li key={index} className="book-item">
              {title}
            </li>
          ))}
        </ul>
      ) : (
        <div className="no-books-message">
          No books found for {year}. Try another year.
        </div>
      )}
    </div>
  );
}