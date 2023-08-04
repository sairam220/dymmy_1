import {Redirect, Route} from 'react-router-dom'
import LoginContext from '../../Context'

const ProtectedRoute = props => {

    <LoginContext.Consumer>
        {
            value=>{
                const {userId}=value
                if (userId === undefined) {
                    return <Redirect to="/login" />
                }
                return <Route {...props} />
            }
        }
    </LoginContext.Consumer>
  
}

export default ProtectedRoute