import Navigation from "@/components/Layouts/Navigation"
import { useAuth } from "@/hooks/auth"

const Layout = ({children}) => {
   const { user } = useAuth({ middleware: 'auth' })
   return (
      <div className="min-h-screen bg-gray-100">
      <Navigation user={user} />
      <main>{children}</main>
  </div>
   )
 }
 
 export default Layout