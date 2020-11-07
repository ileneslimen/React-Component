import logo from './logo.svg';
import './App.css';
import FullName from './Component/Profile/FullName'
import Adress from "./Component/Profile/Adress";
import Photo from "./Component/Profile/ProfilePhoto"
function App() {
  return (
    <div className='main'>
      <Photo/>
      <div className='a'>
     < FullName/>
     <Adress/>
     </div>
    </div>
  );
}

export default App;
