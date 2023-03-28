import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
    return (
        <div className="container relative mx-auto px-3  md:px-5">
            <Navbar />
            <Component {...pageProps} />
            <Footer />
        </div>
    );
}
