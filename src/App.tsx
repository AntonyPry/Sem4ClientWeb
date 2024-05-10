import './App.css';
import DocumentForm from './components/DocumentForm';
import DynamicPagination from './components/DynamicPagination';

function App() {
  return (
    <div className="App">
      <DocumentForm />
      <hr />
      <DynamicPagination />
    </div>
  );
}

export default App;
