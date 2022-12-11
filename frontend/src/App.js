import { BrowserRouter , Route, Routes } from 'react-router-dom';
import ListMhs from './components/ListMhs';
import AddMhs from './components/AddMhs';
import EditMhs from './components/EditMhs';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListMhs/>}/>
        <Route path="/add" element={<AddMhs/>}/>
        <Route path="/edit/:id" element={<EditMhs/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
