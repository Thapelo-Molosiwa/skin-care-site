import '../styles/globals.css';
import '../styles/HomePage.module.css';
import Navbar from '../components/Navbar';
import '../styles/cart.css';
import '../styles/About.module.css';


import '../styles/Billing.module.css';

export default function App({ Component, pageProps }) {
  return (
    <>
    <link rel="icon" href="/favicon.ico" />
      <Navbar />
      <main className="pt-16">
        <Component {...pageProps} />
      </main>
    </>
  );
}






