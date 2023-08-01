import { Link } from 'react-router-dom'
import './index.css'


const MainNavbar=()=>(
    <div className='navbar'>
        <div className='flex-column'>
         <h1 className='hheading'>Accounts</h1>
         <div className='flex-row'>
            <Link to='/all-transactions' className='header-link'>
            <li>All Transactions</li>
            </Link>
            
            <Link to='/debit' className='header-link'>
            <li>Debit</li>
            </Link>
            <Link to='/credit' className='header-link'>
            <li>Credit</li>
            </Link>
            </div>
         </div>
         <button className='add-tansaction'>+ Add Transaction</button>

    </div>
)

export default MainNavbar