import './App.css'
import Hero from './components/Hero';
// this is a global css file
// but this is a bad practice
import Navigation from './components/Navigation';

const App = () => {
  return <div>
    <Navigation/>
    <Hero/>
  </div>
};
export default App; // exporting so that we can use it outside this file and folder