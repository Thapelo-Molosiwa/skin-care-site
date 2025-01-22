import '../styles/globals.css';
import '../styles/HomePage.module.css';
import Navbar from '../components/Navbar';
import '../styles/CartPage.module.css'
import '../styles/About.module.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Component {...pageProps} />
      </main>
    </>
  );
}
