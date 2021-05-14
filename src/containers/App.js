import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import './App.css'
import Scroll from '../components/Scroll.js'
import ErrorBoundary from '../components/ErrorBoundary'


function App() {

    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchfield] = useState('');
    const [count, setCount] = useState(0)
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {setRobots(users)})
        console.log(count)
    }, [count]) //only run if count changes
    
    const onSearchChange = (event) => {
        setSearchfield(event.target.value)
    }
    
    const filteredRobots = robots.filter(robots => {
        return robots.name.toLowerCase().includes(searchfield.toLowerCase())
    })
    if (robots.length ===0){
        return <h1>Loading</h1>
    } else {
        return (
            <div className = 'tc'>
            <h1>RoboFriends</h1>
            <button onClick={() =>setCount(count+1)}>Click Me</button>
            <SearchBox searchChange = {onSearchChange}/>
            <Scroll>
            <ErrorBoundary>
            <CardList robots = {filteredRobots}/>
            </ErrorBoundary>
            </Scroll>
            </div>
            );
        }
    }
    
    export default App;