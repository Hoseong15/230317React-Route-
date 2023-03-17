import logo from './logo.svg';
import './App.css';
import {Routes, Route, Link} from 'react-router-dom'
import Home from './Route/Home';
import About from './Route/About';
import Products from './Route/Products';
import ProductDetail from './Route/ProductDetail';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Route 안에 속성값이 두 개가 들어간다 path / element 
            1. path : 페이지의 주소 URL
            2. element : path 주소로 이동 했을 때 보여줄 페이지
            / : 기본 경로
        */}
        <Route path='/' element={<Home/>}/>

        {/* nested Routes */}
        <Route path='/about' element={<About/>}>
          <Route path='member' element={<h1>멤버~~~</h1>}/>
          <Route path='location' element={<h1>로케이션~~~</h1>}/>
        </Route>

        {/* <Route path='/about' element={<About/>}/>
        <Route path='/about/member' element={<h1>멤버~~~</h1>}/>
        <Route path='/about/location' element={<h1>로케이션~~~</h1>}/> */}
        
        {/* <Route path='/products' element={<Products/>}/>
        <Route path='/products/:id' element={<ProductDetail/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
