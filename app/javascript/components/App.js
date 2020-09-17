import React from 'react'
import {Route, Swtich, Switch} from 'react-router-dom'

const App = () => {
    return (
        <Switch>
            <Route exact path='/' component={Airline} />
        </Switch>
    )
}

export default App