import { Routes, Route } from 'react-router-dom';
import ParentTable from './components/ParentTable';
import ChildTable from './components/ChildTable';
import store from './store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route exact path="/" element={<ParentTable />} />
        <Route path="/parents/:parentId" element={<ChildTable />} />
      </Routes>
    </Provider>
  );
}

export default App;
