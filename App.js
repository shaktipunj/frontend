import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ListProposalComponent from './components/ListProposalComponent';
import ViewProposalComponent from "./components/ViewProposalComponent";
import CreateProposalComponent from './components/CreateProposalComponent'
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                <Switch>
                <Route path = "/" exact component = {ListProposalComponent}></Route>
                          <Route path = "/proposal" component = {ListProposalComponent}></Route>
                          <Route path = "/add-proposal/:id" component = {CreateProposalComponent}></Route>
                          <Route path = "/view-proposal/:id" component = {ViewProposalComponent}></Route>
          </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;