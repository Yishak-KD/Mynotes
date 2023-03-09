// import Counter from './components/counter';
// import ReactHooks from './components/ReactHooks';
// import HookObject from './components/HookObject';
// import HookArray from './components/HookArray';
// import EffectHooks from './components/EffectHooks';
// import FetchApi from './components/FetchApi';
// import UseContext from './components/UseContext';
// import LanguageProvider from './UseContext/LanguageProvider'
// import LanguageSelector from './UseContext/LanguageSelector';
// import Refs from "./components/UseRef";
// import Form from './components/Form'
import RespondAnAPICall from "./components/RespondAnAPICall";
import Counter from "./UseReducer/ReducerHooks";
// import UserProfile from "./UseReducer/ReducerHooks_2";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      {/* <Refs /> */}
      {/* <Form /> */}
      {/* <FetchApi /> */}
      {/* <UserProfile /> */}
      <Router>
        <Switch>
          <Route exact path="/home" component={Counter} />
          <Route exact path="/about" component={RespondAnAPICall} />
        </Switch>
      </Router>
    </>
  )
}

export default App;