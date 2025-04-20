// Import PropTypes for type checking
import PropTypes from 'prop-types';

// UserProfile component that displays user information
export default function UserProfile({ user, change, setChange }) {
    return (
        <>
            {/* Main profile container */}
            <div className="ProfileCard">
                {/* Display user's name */}
                <h1 className="profile-title">Name: {user.name}</h1>
                
                {/* Display user's profile image */}
                <img 
                    className="profile-image" 
                    src={user.img} 
                    alt={`${user.name} Image`} 
                    width={"200px"} 
                />
                
                {/* Display user's bio */}
                <p className="profile-bio">{user.bio}</p>
                
                {/* Button to trigger profile change */}
                <button 
                    className="profile-button" 
                    onClick={() => setChange(!change)}
                >
                    Change
                </button>
            </div>
        </>
    );
}

// Prop type validation for the component
UserProfile.propTypes = {
    // User object containing name, image and bio
    user: PropTypes.shape({
        name: PropTypes.string.isRequired,  // Name must be a string and is required
        img: PropTypes.string.isRequired,   // Image URL must be a string and is required
        bio: PropTypes.string.isRequired,   // Bio must be a string and is required
    }).isRequired,
    
    // Boolean flag indicating if profile should change
    change: PropTypes.bool.isRequired,
    
    // Function to update the change state
    setChange: PropTypes.func.isRequired,
};