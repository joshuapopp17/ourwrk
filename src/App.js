import './App.css';
import Button from 'react-bootstrap/Button';


function App() {
  return (
    <div class="d-flex flex-column p-2 justify-content-center align-items-center h-100">
      <Button type="button" className="btn btn-primary">Button #1</Button>
      <Button type="button" className="btn btn-success">Button #2</Button>
      <Button type="button" className="btn btn-info">Button #3</Button>
    </div>
  );
}

export default App;
