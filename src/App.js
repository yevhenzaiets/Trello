import './App.css';
import Header from './components/Header/Header';
import MainBoard from './components/MainBoard/MainBoard';
import { Route } from 'react-router-dom';
import ListItem from './components/NodeList/ListItem';


function App() {
  return <div>
    <Header />
    <Route exact path='/' component={MainBoard} />
    <Route exact path='/listItem' component={ListItem} />
  </div>
}

export default App;
