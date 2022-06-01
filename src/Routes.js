import { BrowserRouter, Route } from "react-router-dom";
import Register from "./controllers/Register";
import Leads from "./controllers/Leads";

export default function Routes() {
  return(
    <BrowserRouter>
      <Route path='/' exact component={Register} />
      <Route path='/leads' exact component={Leads} />
    </BrowserRouter>
  )
}