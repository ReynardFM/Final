// Import faker for generating fake user data
import { faker } from "@faker-js/faker";

// Import React hooks
import { useEffect, useState } from "react";

// Import the Nav and UserProfile components
import Nav from './components/section4';
import UserProfile from './components/section1';

// Define the Profile component
export default function Profile() {
  // State to store the generated user data
  const [user, setUser] = useState({
    name: "",
    img: "",
    bio: "",
  });

  // State to control when user data should be regenerated
  const [change, setChange] = useState(false);

  // useEffect triggers whenever 'change' value is updated
  useEffect(() => {
    // Randomly pick gender for more diverse data
    const gender = Math.random() < 0.5 ? "male" : "female";

    // Generate fake user data based on the selected gender
    setUser({
      name: faker.person.fullName({ sex: gender }),
      img: faker.image.personPortrait({ sex: gender }),
      bio: faker.person.bio()
    });
  }, [change]); // Re-run this effect when 'change' changes

  return (
    <div>
      {/* Render the top navigation bar */}
      <Nav />

      {/* Render the user profile and pass user data + state handlers */}
      <UserProfile user={user} change={change} setChange={setChange} />
    </div>
  );
}
