import {BsArrowDownCircle,BsArrowUpCircle} from 'react-icons/bs'
import {BiDollar,BiEditAlt} from 'react-icons/bi'
import {RiDeleteBin5Line} from 'react-icons/ri'
import './index.css'


const LastThreeCard=(props)=>{
    const {transaction,onDelete}=props
    const {amount,category,date,transactionName,id,type}=transaction
    
    const deleteItem=()=>{
           onDelete(id)
    }

    return(
          <div className='last-three-card'>
               {type==='credit'?<BsArrowDownCircle className='icon-credit'/>:<BsArrowUpCircle className='icon-debit'/>}
               <p className='transactionName'>{transactionName}</p>
               <p className='category'>{category}</p>
               <p className='category'>{date}</p>
               <p className='amount'><BiDollar/>{amount}</p>
               <BiEditAlt className='edit'/>
               <RiDeleteBin5Line className='delete' onClick={deleteItem}/>
          </div>
    )
}

export default LastThreeCard

