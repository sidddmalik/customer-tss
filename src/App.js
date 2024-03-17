import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { HashRouter,Routes,Route } from 'react-router-dom';
import Nav from './components/Nav';
import CreateSupport from './components/CreateSupport';
import SupportList from './components/SupportList';
import EditSupport from './components/EditSupport';

function App() {
  return (
    <div class="container">
      <HashRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<CreateSupport />} />
          <Route path="/create-con" element={<CreateSupport />} />
          <Route path="/support-list" element={<SupportList />} />
          <Route path="/edit-con/:id" element={<EditSupport />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;