import { BrowserRouter as Router ,Redirect , Route,Switch} from 'react-router-dom'
import Login from './pages/Login';
import Layout from './pages/Layout';
import NotFound from './pages/NotFound'
function App() {
  return (
    <Router>
      {/* <div className="App">
        <Link to="/login">登录页</Link>
        <Link to="/home">首页</Link>
      </div> */}
      <Switch>
        <Redirect exact from='/' to='/home' ></Redirect>
        <Route path="/login" component = {Login}></Route>
        <Route path="/home" component= {Layout}></Route>
        <Route path="*" component={NotFound}></Route>
      </Switch>
    </Router>  
  );
}

export default App;
