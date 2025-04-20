import { useEffect, useState } from "react";

// Component that generates and manages bracket patterns
export default function BracketGenerator({ num, setNum }) {
    // State to track bracket strings (front and back)
    const [bracket, setBracket] = useState({
        front: "",
        back: "",
    });

    useEffect(() => {
        // Adds a random bracket pair based on current num value
        function addBracket() {
            const frontBracketList = ["{", "[", "("];
            const backBracketList = ["}", "]", ")"];
            const pos = getRandomInt(3); // Random index for bracket type
            
            if (num > 0) {
                // Add to right side (normal mode)
                setBracket(prev => ({
                    front: prev.front + frontBracketList[pos],
                    back: backBracketList[pos] + prev.back,
                }));
            } else if (num < 0) {
                // Add to left side (reverse mode)
                setBracket(prev => ({
                    front: backBracketList[pos] + prev.front,
                    back: prev.back + frontBracketList[pos],
                }));
            }
        }
        
        // Removes bracket pairs based on current num value
        function removeBracket() {
            if (num === 0) {
                // Reset when num is zero
                setBracket({ front: "", back: "" });
            } else if (bracket.front.length > Math.abs(num)) {
                if (num > 0) {
                    // Remove from right side (normal mode)
                    setBracket(prev => ({
                        front: prev.front.slice(0, -1),
                        back: prev.back.slice(1),
                    }));
                } else {
                    // Remove from left side (reverse mode)
                    setBracket(prev => ({
                        front: prev.front.slice(1),
                        back: prev.back.slice(0, -1),
                    }));
                }
            }
        }
        
        // Main effect logic
        if (num === 0) {
            setBracket({ front: "", back: "" }); // Clear when zero
        } else if (Math.abs(num) > bracket.front.length) {
            addBracket(); // Add when num increases
        } else if (Math.abs(num) < bracket.front.length) {
            removeBracket(); // Remove when num decreases
        }
    }, [num]);

    // Helper function to get random integer
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    
    return (
        <>
            <div className="BracketCard">
                {/* Conditional rendering based on num value */}
                {num === 0 && <h1 className="bracket-title">No Bracket</h1>} 
                {num !== 0 && (
                    <h1 className="bracket-title">
                        Bracket: {bracket.front} {num} {bracket.back}
                    </h1>
                )} 
                
                {/* Control buttons */}
                <div className="bracket-buttons">
                    <button 
                        className="add-button" 
                        onClick={() => setNum(num + 1)}
                    >
                        Add Bracket
                    </button>
                    <button 
                        className="remove-button" 
                        onClick={() => setNum(num - 1)}
                    >
                        Remove Bracket
                    </button>
                </div>
            </div>
        </>
    );
}