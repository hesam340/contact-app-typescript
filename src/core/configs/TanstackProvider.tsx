import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import type { TChildren } from "@/types/props";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { refetchOnMount: false, refetchOnWindowFocus: false, retry: 1 },
  },
});

function TanstackProvider({ children }: TChildren) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

export default TanstackProvider;
