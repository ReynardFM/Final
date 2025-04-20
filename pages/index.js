// Import the Link component from Next.js for client-side navigation
import Link from 'next/link';

// Import the Nav component from your local components directory
import Nav from './components/section4';

// Import useRouter hook from Next.js to access the current route
import { useRouter } from 'next/router';

// Define the main Home component for the homepage
export default function Home() {
  const router = useRouter(); // Get the router object to determine the current path

  return (
    <div className="home">
      {/* Render the navigation bar from the Nav component */}
      <Nav />

      {/* Display the welcome message */}
      <h1 className="welcome">Welcome to the App</h1>

      {/* Navigation links to other pages in the app */}
      <div className="navbar">
        {/* Each link is styled as active if the current route matches the link's href */}
        <Link
          href="/profile"
          className={`nav-link ${router.pathname === '/profile' ? 'active' : ''}`}
        >
          Go to Profile
        </Link>
        <Link
          href="/brackets"
          className={`nav-link ${router.pathname === '/brackets' ? 'active' : ''}`}
        >
          Go to Bracket Generator
        </Link>
        <Link
          href="/todos"
          className={`nav-link ${router.pathname === '/todos' ? 'active' : ''}`}
        >
          Go to Todo List
        </Link>
        <Link
          href="/bookrecommend"
          className={`nav-link ${router.pathname === '/bookrecommend' ? 'active' : ''}`}
        >
          Go to Book Recommendations
        </Link>
      </div>
    </div>
  );
}
