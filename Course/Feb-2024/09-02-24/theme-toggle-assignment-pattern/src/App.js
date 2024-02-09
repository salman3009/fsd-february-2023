
import './App.css';
import { ThemeProvider } from './ThemeProvider';
import { ThemeToggleButton } from './ThemeToggleButton';
import { Page } from './Page'

function App() {
  return (
    <div id="main">
    <ThemeProvider>
      <Page />
      <ThemeToggleButton />
    </ThemeProvider>
  </div>
  );
}

export default App;
