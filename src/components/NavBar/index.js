import { Link } from 'react-router-dom'
import './index.css'


const Navbar=()=>(
    <div className='navbar'>
         <h1 className='hheading'>Accounts</h1>
         <Link to='/add-transaction'>
         <button className='add-tansaction'>+ Add Transaction</button>
         </Link>
    </div>
)

export default Navbar