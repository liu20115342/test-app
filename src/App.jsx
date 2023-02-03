import { Switch, Route, Link } from 'react-router-dom'
import { App2 } from '../lib/test-app2/dist/app-packages';
import './App.css'

const Why = () => {
  return (
    <div>why</div>
  )
}

function App() {
  return (
    <div className="App">
      <div>
      <Link to="/">base</Link>
      <Link to="/dex">dex</Link>
      </div>
      <Switch>
        <Route path="/" component={Why} exact></Route>
        <Route path="/dex" component={App2}></Route>
      </Switch>
    </div>
  )
}

export default App
