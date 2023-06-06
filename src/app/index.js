import { BrowserRouter } from "react-router-dom";
import { Byeinfo } from "./bye bitcoin/bitcoinInfo";

function AppRoutes(){
return(
    <BrowserRouter>
    <Routes>
        <Route exact path="/bitcoinInfor" element={<Byeinfo />} ></Route>
    </Routes>
    </BrowserRouter>
)
}

export default AppRoutes;