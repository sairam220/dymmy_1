import {BiDollar} from 'react-icons/bi'

import './index.css'



const Debit=(props)=>{
    const {debit}=props
    return(
        <div className='debit-credit-card'>
             <div className='description'>
                 <h1 className='debit-credit'><BiDollar/>{debit}</h1>
                 <p className='name'>Debit</p>
             </div>
             <img src="https://res.cloudinary.com/dmov4v1ui/image/upload/v1690825285/Group_1_dzuba0.png" alt='debit-credit' className='debit-cred-image'/>
        </div>
    )
}

export default Debit