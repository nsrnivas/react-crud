import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Container from '@material-ui/core/Container'
export default function RootComponent() {
    return (
        <div>
            <Container>
                <Router>
                    <Switch>
                        {/* <Route path="/addEmp" component={ClassCreate} />
                        <Route path="/editEmp/:id" component={ClassCreate} />
                        <Route path="/viewEmps" component={ClassView} /> */}
                    </Switch>
                </Router>
                <h1>Class Component(root)</h1>
            </Container>
        </div>
    )
}
