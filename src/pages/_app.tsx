import { useRef } from "react";
import type { AppProps } from "next/app";
import "@assets/main.css";
import { UIProvider } from "@contexts/ui.context";
import { QueryClient, QueryClientProvider } from "react-query";

const Noop: React.FC = ({ children }) => <>{children}</>;

const CustomApp = ({ Component, pageProps }: AppProps) => {
  const Layout = (Component as any).Layout || Noop;
  const queryClientRef = useRef<any>(null);
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }
  return (
    <QueryClientProvider client={queryClientRef.current}>
      <UIProvider>
        <Layout {...pageProps}>
          <Component {...pageProps} />
        </Layout>
      </UIProvider>
    </QueryClientProvider>
  );
};

export default CustomApp;
