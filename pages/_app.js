import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
    return (
        <div className="container relative mx-auto px-2 md:px-3  lg:px-5">
            <Navbar />
            <Component {...pageProps} />
            <Footer />
        </div>
    );
}
