import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav >
      <div >
        {/* Logo */}
        <Link href="/">
          <div >
            <Image src="/logo.png" alt="Logo" width={50} height={50} />
            <span >Organic Skincare</span>
          </div>
        </Link>

        {/* Navigation Links */}
        <div >
          {/* <Link href="/" className="hover:text-green-300">Home</Link> */}
          <Link href="/about" >About Us</Link>
          <Link href="/contact" >Contact Us</Link>
          <Link href="/cart" >Cart</Link>
          <Link href="/billing" >Billing</Link>
        </div>
      </div>
    </nav>
  );
}
