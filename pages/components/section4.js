// Import Next.js navigation components
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Nav() {
  // Get the current route information using Next.js router
  const router = useRouter();
  
  return (
    // Navigation container
    <nav className="navbar">
      {/*
        Home link
        - Highlights when on root path ('/')
        - Uses Next.js Link for client-side navigation
      */}
      <Link 
        href="/" 
        className={`nav-link ${router.pathname === '/' ? 'active' : ''}`}
        aria-current={router.pathname === '/' ? 'page' : undefined}
      >
        Home
      </Link>

      {/*
        Profile link
        - Highlights when on '/profile' path
        - Prefetches pages in the background for better performance
      */}
      <Link 
        href="/profile" 
        className={`nav-link ${router.pathname === '/profile' ? 'active' : ''}`}
        aria-current={router.pathname === '/profile' ? 'page' : undefined}
        prefetch={false} // Example of disabling prefetch if needed
      >
        Profile
      </Link>

      {/*
        Brackets link
        - Highlights when on '/brackets' path
      */}
      <Link 
        href="/brackets" 
        className={`nav-link ${router.pathname === '/brackets' ? 'active' : ''}`}
        aria-current={router.pathname === '/brackets' ? 'page' : undefined}
      >
        Brackets
      </Link>

      {/*
        Todos link
        - Highlights when on '/todos' path
      */}
      <Link 
        href="/todos" 
        className={`nav-link ${router.pathname === '/todos' ? 'active' : ''}`}
        aria-current={router.pathname === '/todos' ? 'page' : undefined}
      >
        Todos
      </Link>

      {/*
        Book Recommendations link
        - Highlights when on '/bookrecommend' path
      */}
      <Link 
        href="/bookrecommend" 
        className={`nav-link ${router.pathname === '/bookrecommend' ? 'active' : ''}`}
        aria-current={router.pathname === '/bookrecommend' ? 'page' : undefined}
      >
        Book Recommendations
      </Link>
    </nav>
  );
}