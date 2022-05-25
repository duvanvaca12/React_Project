import { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import HomePage from './Pages/HommePage';
import VolcanoList from './Pages/VolcanoList';
import NotFoundPage from './Pages/NotFound';
import Login from './Pages/Login';
import VolcanoIDpage from './Pages/VolcanoIDpage';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/volcanoes" element={<VolcanoList/>}/>
          <Route path='/login' element={<Login/>} />
          <Route path='/volcano/:id' element={<VolcanoIDpage/>} />
          <Route path='*' element={<NotFoundPage/>} />
        </Routes>
    </BrowserRouter>
    // <div className="App">
    //     {/* {volcanoData.map((volcanoData) => {
    //       return <div>
    //         <h2>{volcanoData}</h2>
    //         </div>
    //     })} */}
    //     <Button variant="contained" onClick={handlerClick}>Hello World</Button>
              
    // </div>
    
  );
}

export default App;
