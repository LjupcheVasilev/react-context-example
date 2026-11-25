"use client"
import Header from "./Header"
import Footer from "./Footer"
import { QueryClient, QueryClientProvider } from "react-query"
const Layout = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col justify-between text-center">
        <Header />
        {children}
        <Footer />
      </div>
    </QueryClientProvider>
  )
}
export default Layout
