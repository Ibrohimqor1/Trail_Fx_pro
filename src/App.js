import { Routes, Route } from "react-router-dom";
import Best_card from "./Components/Best_of_card/Best_card";
import Korzinka from "./Components/Korzinka_Pages/Korzinka";
import Daily_Cards from "./Daily_cards/Daily_Cards";
import About from "./Pages/About";
import Accessories from "./Pages/Accessories";
import Airdopes from "./Pages/Airdopes";
import Cables from "./Pages/Cables";
import Category from "./Pages/Category";
import Charger from "./Pages/Charger";
import DailyDeals from "./Pages/DailyDeals";
import Earphones from "./Pages/Earphones";
import Headphones from "./Pages/Headphones";
import Home from "./Pages/Home";
import Nescbands from "./Pages/Nescbands";
import Party from "./Pages/Party";
import Powerbank from "./Pages/Powerbank";
import Smart_Watch from "./Pages/Smart_Watch";
import Soundbars from "./Pages/Soundbars";
import Speakers from "./Pages/Speakers";
import Trimmer from "./Pages/Trimmer";
import View_All from "./Pages/View_All";
import Register from "./Pages/register";
import Pnf from "./Pages/Pnf";
import Admin from "./Pages/Admin";
import Login_admin from "./Pages/Login_admin";
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/category' element={<Category/>}/>
        <Route path='/dailyDeals' element={<DailyDeals/>}/>
        <Route path='/airdopes' element={<Airdopes/>}/>
        <Route path='/nescbands' element={<Nescbands/>}/>
        <Route path='/smartwatch' element={<Smart_Watch/>}/>
        <Route path='/headphones' element={<Headphones/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/speaker' element={<Speakers/>}/>
        <Route path='/earphones' element={<Earphones/>}/>
        <Route path='/soundbars' element={<Soundbars/>}/>
        <Route path='/party' element={<Party/>}/>
        <Route path='/trimmer' element={<Trimmer/>}/>
        <Route path='/charger' element={<Charger/>}/>
        <Route path='/powerbank' element={<Powerbank/>}/>
        <Route path='/cable' element={<Cables/>}/>
        <Route path='/accessories' element={<Accessories/>}/>
        <Route path='/view' element={<View_All/>}/>
        <Route path='/card/:_id' element={<Daily_Cards/>}/>
        <Route path='/homecard/:id' element={<Best_card/>}/>
        <Route path='korzinka' element={<Korzinka/>}/>
        <Route path="/register" element={ <Register /> } />
        <Route path="*" element={ <Pnf /> } />
        <Route path="/admin" element={<Login_admin />} />
        <Route path="/admin1" element={<Admin />} />
        
       
      </Routes>

    </>
  );
}

export default App;
