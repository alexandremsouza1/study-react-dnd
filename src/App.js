import './styles/App.css';
import LeadsProvider from './contexts/LeadsProvider';
import Routes from './Routes';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function App() {
  return (
    <LeadsProvider>
      <DndProvider backend={HTML5Backend}>
        <Routes />
      </DndProvider>
    </LeadsProvider>
  );
}

export default App;
