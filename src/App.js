import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login/Login'
import Profile from './components/Profile/Profile';
import Transaction from './components/Transaction';
import Home from './components/Home';
import DebitTransaction from './components/DebitTransaction'
import CreditTransaction from './components/CreditTransaction'
import AddTransactionForm from './components/AddTransaction'
import LoginContext from './Context'
import ProtectedRoute from './components/ProtectedRoute';
import { Component } from 'react';

const userStordId=localStorage.getItem('user_id')

class App extends Component {

  state={userId:userStordId?userStordId:'',adminUserOrNot:false}

  setUserId=(userLoginId)=>{
    this.setState({userId:userLoginId})
    

  }

  setAdminUserOrNot=(booleanValue)=>{
        this.setState({adminUserOrNot:booleanValue})
        console.log(this.state.adminUserOrNot)
  }

  render(){
    const {userId,adminUserOrNot}=this.state
  
  return (
    <LoginContext.Provider value={{userId,adminUserOrNot,setUserId:this.setUserId,setAdminUserOrNot:this.setAdminUserOrNot}}>
           <Router>
      
      <Switch>
        <Route exact path="/login" component={Login}/>
         
              
              <Route exact path='/' component={Login}/>
              <ProtectedRoute exact  path='/home' component={Home}/>
              <ProtectedRoute exact path='/all-transactions' component={Transaction}/>
              <ProtectedRoute exact path='/debit' component={DebitTransaction}/>
              <ProtectedRoute exact path='/credit' component={CreditTransaction}/>
              <ProtectedRoute exact path='/add-transaction' component={AddTransactionForm}/>
             <ProtectedRoute exact path="/profile" component={Profile}/>
              
               
          
      </Switch>
    
  </Router>
    </LoginContext.Provider>

    
  );
}
}

export default App;
