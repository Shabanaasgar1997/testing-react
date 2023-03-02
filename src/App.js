import Navbar from "./Navbar";

import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import PageNotFound from "./PageNotFound";
import FormValidation from "./FormValidation";
import PrintingUserDetails from "./PrintingUserDetails";
import FoodSearch from "./FoodSearch";
import CrudApplication from "./CRUD/CrudApplication";
import Create from "./CRUD/Create";
import Read from "./CRUD/Read";
import Update from "./CRUD/Update";

// import Banner from "./Banner";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/index" element={<Home />} />
        <Route
          path="/about"
          element={
            <About name="Pavan1" designation="uideveloper" salary={45000} />
          }
        />
        <Route path="/form" element={<FormValidation />} />
        <Route path="/create" element={<Create />} />
        <Route path="/read" element={<Read />} />

        <Route path="/crudapplication" element={<CrudApplication />} />
        <Route path="/edit" element={<Update />} />

        <Route path="/usersdetails" element={<PrintingUserDetails />} />
        <Route path="/foodsearch" element={<FoodSearch />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
      {/* <div >
      <h1>Hi! Hello to React JS</h1>
      {x}
      <table>
        <tr>
          <td>name</td>
          <td>designation</td>dfdfrhrt
        </tr>
      </table>
      
      <p>Lorem {x} ipsum dolor sit amet consectetur, adipisicing elit. Sunt nisi in ad assumenda necessitatibus, magnam error exercitationem. Nostrum totam similique magni in itaque asperiores et, explicabo eaque incidunt repellendus at, qui, provident esse vitae quasi tenetur sunt harum. Voluptatibus et aliquam eligendi aut vero debitis illum odio voluptas ea explicabo natus voluptatum eius quod libero fuga, maxime suscipit praesentium voluptate. Reprehenderit veritatis libero, culpa alias enim, similique laborum debitis a consequuntur recusandae dolorum voluptatem eveniet? Magnam maxime quidem repudiandae officia iste voluptatibus laboriosam mollitia omnis excepturi. Praesentium optio vel culpa ratione eum ipsa debitis dicta aliquid, iure error aut laborum?</p>    
    </div>
    <div>

    <h1>Hi hello</h1>

    </div> */}
    </>
  );
}

export default App;
