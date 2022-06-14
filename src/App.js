import Form from './components/Form'
import './App.css';
import Profile from './components/Profile';
import { useSelector } from 'react-redux';




function App() {
 const s = useSelector(state=>state.ui.profile)

  return (
    <div className="App">
      {!s && <Form/>}
      {s && <Profile/>}
    </div>
  );
}

export default App;
