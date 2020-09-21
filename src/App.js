import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateComponent from './components/CreateComponent'
import Container from '@material-ui/core/Container'
import ViewEmployees from './components/ViewEmployees'

function App() {
  return (
    <Router>
      <Container>
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/createEmp" exact component={CreateComponent} />
        <Route path="/editEmp/:id" component={CreateComponent} />
        <Route path="/viewEmps" component={ViewEmployees} />
        </Switch>
      </Container>
    </Router>
  );
}
const Home = () => (
  <div>
    <h1>App(root) Component</h1>
  </div>
);
export default App;
