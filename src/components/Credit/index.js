import {BiDollar} from 'react-icons/bi'


const Credit=(props)=>{
    const {credit}=props
    return(
        <div className='debit-credit-card'>
             <div className='description'>
                 <h1 className='debit-credit'><BiDollar/>{credit}</h1>
                 <p className='name'>Credit</p>
             </div>
             <img src="https://res.cloudinary.com/dmov4v1ui/image/upload/v1690825281/Group_qykx4v.png" alt='debit-credit' className='debit-cred-image'/>
        </div>
    )
}

export default Credit