
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import { GitHubProvider } from './context/github/GitHubContext';
import {AlertContextProvider} from './context/alert/AlertContext'
import User from './components/users/User';
function App() {
  return (
    <GitHubProvider>
      <AlertContextProvider>

      <Router>
    <div className='flex flex-col justify-between h-screen'>
      <Navbar />
      <main className='container mx-auto px-3 pb-12'>
        
        <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/notfound' element={<NotFound/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/users/:login' element={<User/>}/>
        
        </Routes>
        
      </main>

      <Footer />
    </div>
        
        
    
    </Router>
    </AlertContextProvider>
    </GitHubProvider>
    
  );
}

export default App;
