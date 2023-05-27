import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to our Real Estate Matching App</h1>
      <nav>
        <ul>
          <li>
            <Link href="/sell">Sell a Property</Link>
          </li>
          <li>
            <Link href="/buyers">Find Buyers</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
