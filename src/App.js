import './index.css';
import Header from './components/Header';
import Intro from './components/Intro';
import Testimonials from './components/Testimonials';
import Bottom from './components/Bottom';


function App() {
  return (
    <div className="App">
  <Header />
  <Intro />
  <Testimonials />
  <Bottom />
    </div>
  );
}

export default App;
