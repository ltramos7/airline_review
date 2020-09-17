import React, {useState, useEffect} from 'react'
// useState, useEffect deal with hooks

const Airlines = () => {

    const [airlines, setAirlines] = useState([])

    // the function below will make a request of our API and fetch a list of airlines from our database
    useEffect(()=> {
        // Get all of our airlines from api
        // Update airlines in our state  
    })

    return (
        <div>This is the Airlines#index view for our app.</div>
    ) 
}

export default Airlines