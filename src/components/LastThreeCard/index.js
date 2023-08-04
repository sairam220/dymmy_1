import {BsArrowDownCircle,BsArrowUpCircle} from 'react-icons/bs'
import {BiDollar,BiEditAlt} from 'react-icons/bi'
import {AiOutlineCloseCircle,AiOutlineClose} from 'react-icons/ai'
import {Popup} from 'reactjs-popup'
import { useEffect, useState } from 'react'
import {RiDeleteBin5Line} from 'react-icons/ri'
import LoginContext from '../../Context'
import './index.css'




const LastThreeCard=(props)=>{

    const {transaction,onDelete,onEdit}=props
    const {amount,category,date,transactionName,id,type}=transaction

    const [transactionFullName, setTransactionName] = useState(transactionName);
  const [transactionType, setTransactionType] = useState(type);
  const [transactionCategory, setTransactionCategory] = useState(category);
  const [totalAmount, setAmount] = useState(amount);
  const [fullDate, setDate] = useState(date);

  useEffect(()=>{
    updateTransaction()
  },[])

  const updateTransaction=async()=>{

    const editedTransaction={
        id,
  name: transactionFullName,
  type: transactionType,
  category: transactionCategory,
  amount: totalAmount,
  date: fullDate,
 
    }

    const response = await fetch('https://bursting-gelding-24.hasura.app/api/rest/update-transaction', {
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

  const handleSubmit=async(e)=>{
      e.preventDefault()
      const response=await updateTransaction()
     
      if (response.ok){
        alert('Transaction updated successfully');
        
      }

  }
    
    
    const deleteItem=()=>{
           onDelete(id)
    }

    const editItem=()=>{
        onEdit(id)
    }
   return(
       <LoginContext.Consumer>
        {
            value=>{
                
                const {adminUserOrNot}=value
                
                console.log(adminUserOrNot)

                return ( 
            <div className='last-three-card'>
                {type==='credit'?<BsArrowDownCircle className='icon-credit'/>:<BsArrowUpCircle className='icon-debit'/>}
                {adminUserOrNot&&<img className='icon-credit' alt='profile' src='https://res.cloudinary.com/dmov4v1ui/image/upload/v1691118042/Ellipse_103_azxs4a.png'/>
                }<p className='transactionName'>{transactionFullName}</p>
                <p className='category'>{type}</p>
                <p className='category'>{fullDate}</p>
                <p className='amount'><BiDollar/>{totalAmount}</p>
                
                
                
                
                {!adminUserOrNot&&<Popup
       modal
       trigger={
        
          
          <BiEditAlt className='edit' onClick={editItem}/>
        
       }
     >
       {close => (
          <form className="add-transaction-form" onSubmit={handleSubmit}>
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
          
          <button type="submit" className='button'>Edit Transaction</button>
          
        </form>
       )}
                </Popup>}
                {!adminUserOrNot&&<Popup
       modal
       trigger={
        
          <RiDeleteBin5Line className='delete'/>
        
       }
     >
       {close => (
         <div className='delete-pop-up'>
 
           <div className='contaner-popup'>
             <img src="https://res.cloudinary.com/dmov4v1ui/image/upload/v1691076382/danger_uyxxpz.jpg" className='popup-image' alt='delete'/>
           </div>
 
 
             <div>
           <h1 className='delete-heading'>Are you sure you want to Delete?</h1>
           <p className='delete-para'>This transaction will be deleted immediately. You can’t undo this action.</p>
           
           <div className='btn-container'>
           <button className='delete-button-12' type="button" onClick={deleteItem} >
             Yes, Delete
             </button>
             <button
               type="button"
               data-testid="closeButton"
               onClick={() => close()}
               className='cancel-button'
             >
               No, Leave it
             </button>
          
             
             
           </div>
         </div>
         <AiOutlineClose onClick={() => close()} className='delete'/>
         </div>
       )}
                </Popup>}


               </div>
               )

            }
        }
       </LoginContext.Consumer>
    )
}

export default LastThreeCard

