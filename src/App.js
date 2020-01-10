import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import { Container, Dimmer, Loader } from 'semantic-ui-react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import People from './components/People';
import Planets from './components/Planets';
import Films from './components/Films';
import Starships from './components/Starships';
import Vehicles from './components/Vehicles';
import Species from './components/Species';

function App() {
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [films, setFilms] = useState([]);
  const [starships, setStarships] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [species, setSpecies] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    async function fetchPeople() {
      let res = await fetch('https://swapi.co/api/people/?format=json');
      let data = await res.json();
      setPeople(data.results);
      setLoading(false);
    }
    async function fetchPlanets() {
      let res = await fetch('https://swapi.co/api/planets/?format=json');
      let data = await res.json();
      setPlanets(data.results);
      setLoading(false);
    }
    async function fetchFilms() {
      let res = await fetch('https://swapi.co/api/films/?format=json');
      let data = await res.json();
      setFilms(data.results);
      setLoading(false);
    }
    async function fetchStarships() {
      let res = await fetch('https://swapi.co/api/starships/?format=json');
      let data = await res.json();
      setStarships(data.results);
      setLoading(false);
    }
    async function fetchVehicles() {
      let res = await fetch('https://swapi.co/api/vehicles/?format=json');
      let data = await res.json();
      setVehicles(data.results);
      setLoading(false);
    }
    async function fetchSpecies() {
      let res = await fetch('https://swapi.co/api/species/?format=json');
      let data = await res.json();
      setSpecies(data.results);
      setLoading(false);
    }

    fetchPeople();
    fetchPlanets();
    fetchFilms();
    fetchStarships();
    fetchVehicles();
    fetchSpecies();
  }, [])
  return (
   <>
    <Router>
      <Navbar />
      <Container>
        {loading ? (
          <Dimmer active inverted>
            <Loader inverted>Loading</Loader>
          </Dimmer>
        ) : (
          <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/people'>
            <People data={people}/>
          </Route>
          <Route exact path='/planets'>
            <Planets data={planets}/>
          </Route>
          <Route exact path='/films'>
            <Films data={films}/>
          </Route>
          <Route exact path='/starships'>
            <Starships data={starships}/>
          </Route>
          <Route exact path='/vehicles'>
            <Vehicles data={vehicles}/>
          </Route>
          <Route exact path='/species'>
            <Species data={species}/>
          </Route>
        </Switch>
        )}
        
      </Container>
    </Router>
  </>
  );
}

export default App;
