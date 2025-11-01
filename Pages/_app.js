import "@/styles/globals.css";
import Layout from "@/Layout";
import { ThemeProvider } from "@/Components/ThemeProvider";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </ThemeProvider>
  );
}
