import logo from './logo.svg';
import AppHeader from './components/Header/Header';
import AppOverflow from './components/AppOverflow/AppOverflow';
import ProjectsSection from './components/Projects/Projects';
import './App.css';

function App() {
  return (
    <div className="app">
      <AppHeader/>

      <AppOverflow/>


      {/* <ProjectsSection/> */}
    </div>
  );
}

export default App;
