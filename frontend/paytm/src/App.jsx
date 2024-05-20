
import {BrowserRouter,Routes,Route} from "react-router-dom";
import {SignUp} from "./pages/Signup"
import {Signin} from "./pages/Signin"
import {DashBoard } from "./pages/Dashboard"
import {SendMoney} from "./pages/Sendmoney"

function  App()
{

  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/signin" element={<Signin></Signin>}></Route>
        <Route path="/dashboard" element={<DashBoard></DashBoard>}></Route>
        <Route path="/sendmoney" element={<SendMoney></SendMoney>}></Route>
      </Routes>
      
    </BrowserRouter>
    
  )
}
export default App;