import { Link } from 'react-router-dom'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import {Popup} from 'reactjs-popup'
import {v4 as uuidv4} from 'uuid'
import { useEffect, useState } from 'react'

import './index.css'


const MainNavbar=()=>{


    const [transactionFullName, setTransactionName] = useState('');
    const [transactionType, setTransactionType] = useState();
    const [transactionCategory, setTransactionCategory] = useState('');
    const [totalAmount, setAmount] = useState('');
    const [fullDate, setDate] = useState('');
  
    useEffect(()=>{
      updateTransaction()
    },[])
  
    const updateTransaction=async()=>{
  
      const editedTransaction={
        user_id:1,
    name: transactionFullName,
    type: transactionType,
    category: transactionCategory,
    amount: totalAmount,
    date: fullDate,
   
      }
  
      const response = await fetch('https://bursting-gelding-24.hasura.app/api/rest/add-transaction', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-hasura-admin-secret': 'g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF',
  
          },
          body: JSON.stringify(editedTransaction),
        });
      const data = await response.json()
      return response
    }

    const handleSubmitFiel=async(e)=>{
        e.preventDefault()
        const response=await updateTransaction()
        console.log(response)
        if (response.ok){
          alert('Transaction updated successfully');
          
        }
  
    }


return(






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
         

         <Popup
      modal
      trigger={
       
         
        <button className='add-tansaction'>+ Add Transaction</button>
       
      }
    >
      {close => (
         <form className="add-transaction-form" onSubmit={handleSubmitFiel}>
            <div className='close-card'>
            <h1 className='upadte-heading'>Update Transaction</h1>
            <AiOutlineCloseCircle className='delete' onClick={() => close()}/>
            </div>
         <div className="form-control">
           <label htmlFor="transactionName">Transaction Name</label>
           <input
             type="text"
             id="transactionName"
             required
             value={transactionFullName}
             onChange={(e) => setTransactionName(e.target.value)}
           />
         </div>
         <div className="form-control">
           <label htmlFor="transactionType">Transaction Type</label>
           <select
             id="transactionType"
             value={transactionType}
             onChange={(e) => setTransactionType(e.target.value)}  required
           >
             <option value="Credit">Credit</option>
             <option value="Debit">Debit</option>
           </select>
         </div>
         <div className="form-control">
           <label htmlFor="transactionCategory">Transaction Category</label>
           <select
             id="transactionCategory"
             value={transactionCategory}
             onChange={(e) => setTransactionCategory(e.target.value)}
             required
           >
             <option value="Entertainment">Entertainment</option>
             <option value="Food">Food</option>
             <option value="Shopping">Shopping</option>
           </select>
         </div>
         <div className="form-control">
           <label htmlFor="amount">Amount</label>
           <input
             type="number"
             id="amount"
             required
             value={totalAmount}
             onChange={(e) => setAmount(e.target.value)}
           />
         </div>
         <div className="form-control">
           <label htmlFor="date">Date</label>
           <input
             type="date"
             id="date"
             required
             value={fullDate}
             onChange={(e) => setDate(e.target.value)}
           />
         </div>
         
         <button type="submit">Add Transaction</button>
         
       </form>
      )}
    </Popup>


       
    </div>
)

      }

export default MainNavbar