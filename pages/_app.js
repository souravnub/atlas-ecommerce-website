import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import "@/styles/globals.css";
import { Provider } from "jotai";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
    return (
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools />

            <Provider>
                <div className="container relative mx-auto px-3  md:px-5">
                    <Navbar />
                    <Component {...pageProps} />
                </div>
                <Footer />
            </Provider>
        </QueryClientProvider>
    );
}
