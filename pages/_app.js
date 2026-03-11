import "@/styles/globals.css";
import AppLayout from "@/components/layout/AppLayout";
import { ThemeProvider } from "@/components/layout/ThemeProvider";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </ThemeProvider>
  );
}
