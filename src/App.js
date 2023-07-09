import './App.css';
import { TodoWrapper } from './components/TodoWrapper';
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <div className="App">
      <TodoWrapper/>
      <Analytics />
    </div>
  );
}

export default App;
