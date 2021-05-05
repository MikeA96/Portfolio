import React,{ Component} from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/home/home'
import About from './components/about/about'
import Contact from './components/contact/contact'
import Work from './components/work/work'
 
class App extends Component{
    render(){
      return(
        <BrowserRouter>
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/about'  exact component={About}/>
            <Route path='/contact' exact component={Contact}/>
            <Route path='/work'  exact component={Work}/>
        </Switch>
        </BrowserRouter>
      )
    }
  }
  
  export default App