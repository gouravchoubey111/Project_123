import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ApplicantsList } from "./components/ApplicantsList";
import { Dashboard } from "./components/Dashboard";
import { EditForm } from "./components/EditForm";
import { Footer } from "./components/Footer";
import { Login } from "./components/Login";
import { NavigationBar } from "./components/NavigationBar";
import { RegistrationForm } from "./components/RegistrationForm";
import { ViewApplication } from "./components/ViewApplication";
import { Admin } from "./components/Admin";


function App() {
  return (
    <BrowserRouter>
      <NavigationBar></NavigationBar>
      <Routes>
        <Route path="/" element={<Dashboard/>}></Route>
        <Route path="/applicants-list" element={<ApplicantsList/>}></Route>
        <Route path="/visa-registration" element={<RegistrationForm/>}></Route>
        <Route path="/edit/:adhar" element={<EditForm/>}></Route>
        <Route path="/process/:adhar" element={<ViewApplication/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
        <Route path="/Admin" element={<Admin/>}></Route>
        
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
