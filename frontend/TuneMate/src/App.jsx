import { AddUser } from './AddUser';
import { ViewUser } from './ViewUser';
import { Routes, Route, Navigate } from 'react-router-dom';



function App() {
  return (
    <Routes>
      <Route path="/add" element={<AddUser />} />
      <Route path="/view" element={<ViewUser />} />
      <Route path="/" element={<Navigate to="/add" replace />} />
    </Routes>
  );
}

export default App;
