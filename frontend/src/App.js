import logo from './logo.svg';
import AppHeader from './components/Header/Header';
import ProjectsSection from './components/Projects/Projects';
import './App.css';

function App() {
  return (
    <div className="app">
      <AppHeader/>
      <ProjectsSection/>
    </div>
  );
}

export default App;
