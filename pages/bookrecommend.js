import { useState } from "react";
import Nav from "./components/section4";
import BookRecommendations from "./components/section5";

/**
 * BookRecommend - Main page component for book recommendations
 * Manages the shared state between navigation and recommendations
 */
export default function BookRecommend() {
    // State for the selected year (default: 1900)
    const [year, setYear] = useState(1900);
    
    // State to trigger data refetch when changed
    const [click, setClick] = useState(true);

    return (
        <div className="page">
            {/* Navigation component - persistent across pages */}
            <Nav />
            
            {/* 
              BookRecommendations component
              - Receives year state and handlers
              - Manages the API fetching and display
            */}
            <BookRecommendations 
                year={year} 
                setYear={setYear} 
                click={click} 
                setClick={setClick}
            />
        </div>
    );
}