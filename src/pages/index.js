import Link from "next/link";

export default function HomePage() {
  return (
    <div class="intro">
      <h1>Welcome to our Real Estate Matching App</h1>
      <nav>
            <Link href="/sell">Sell a Property</Link>
      </nav>
    </div>
  );
}
