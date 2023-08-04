import { Component } from "react";
import { Rings } from 'react-loader-spinner'
import Navbar from "../NavBar";
import Sidebar from "../Sidebar";
import LastThreeCard from '../LastThreeCard'
import Debit from "../Debit";
import Credit from "../Credit";
import Header from "../Header";


import BarChart from '../Barchart'
import './index.css'

class Home extends Component{
    state={totalDebitAndCredit:[],lastThreeTransactions:[],lastSevenDaysTransaction:[],dayName:[],credit:[],debit:[]}

     convertData = (data) => {
        const sums = {
          debit: 0,
          credit: 0
        };
      
        data.forEach(item => {
          if (item.type === "debit") {
            sums.debit += item.sum;
          } else if (item.type === "credit") {
            sums.credit += item.sum;
          }
        });
      
        return sums;
      };

      

      getLastThreeTransaction=async()=>{
        const url=`https://bursting-gelding-24.hasura.app/api/rest/all-transactions?limit=${3}&offset=${1}`
        const options={
            method:'GET',
            headers:{
                'x-hasura-admin-secret': 'g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF',
            }

        }
        const response=await fetch(url,options)
        const data=await response.json()
        const res=data.transactions.map(each=>({
            amount:each.amount,
            category:each.category,
            date:each.date,
            id:each.id,
            transactionName:each.transaction_name,
            type:each.type,
            userId:each.user_id
        }))
        this.setState({lastThreeTransactions:res})
      }

      onDelete=(id)=>{
        const {lastThreeTransactions}=this.state
        const filterTransactions=lastThreeTransactions.filter(each=>(each.id!==id))
        this.setState({lastThreeTransactions:filterTransactions})
    }

      getLastSevenDaysTransaction=async()=>{
        const url=`https://bursting-gelding-24.hasura.app/api/rest/daywise-totals-7-days`
        const options={
            method:'GET',
            headers:{
                'x-hasura-admin-secret': 'g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF',
            }

        }
        const response=await fetch(url,options)
        const data1=await response.json()
        const data=data1.last_7_days_transactions_credit_debit_totals
        this.setState({lastSevenDaysTransaction:data.slice(0,7)})
       

        const creditData = data.filter(item => item.type === 'credit');
    const debitData = data.filter(item => item.type === 'debit');

    const creditSumByDate = {};
    creditData.forEach(item => {
      const date = new Date(item.date).toLocaleDateString();
      if (!creditSumByDate[date]) {
        creditSumByDate[date] = 0;
      }
      creditSumByDate[date] += item.sum;
    });

    const debitSumByDate = {};
    debitData.forEach(item => {
      const date = new Date(item.date).toLocaleDateString();
      if (!debitSumByDate[date]) {
        debitSumByDate[date] = 0;
      }
      debitSumByDate[date] += item.sum;
    });

    const dates = [...new Set(data.map(item => new Date(item.date).toLocaleDateString()))];
    const creditValues = dates.map(date => creditSumByDate[date] || 0);
    creditValues.sort(function(a, b){return a - b});
    creditValues.reverse()
    const debitValues = dates.map(date => debitSumByDate[date] || 0);
    debitValues.sort(function(a, b){return a - b});
    debitValues.reverse()
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const daysNames=dates.map(each=>days[new Date(each).getDay()])
    
   this.setState({dayName:daysNames})
   this.setState({credit:creditValues.slice(0,7)})
   this.setState({debit:debitValues.slice(0,7)})
  
    

      }
      

    componentDidMount(){
        this.getCreditAndDebit()
        this.getLastThreeTransaction()
        this.getLastSevenDaysTransaction()
    }

    


renderLoadingView= () => (
      <div className="flex justify-center items-center ">
        <Rings color="#00BFFF" height={80} width={80} />
      </div>
    );

    getCreditAndDebit=async()=>{
        const url='https://bursting-gelding-24.hasura.app/api/rest/credit-debit-totals'
        const options={
            method:'GET',
            headers:{
                'x-hasura-admin-secret': 'g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF',
            }

}
        const response=await fetch(url,options)
        const data=await response.json()
        if (response.ok){
            const totalsCreditDebitTransactions=data.totals_credit_debit_transactions
            const res=this.convertData(totalsCreditDebitTransactions)
            this.setState({totalDebitAndCredit:res})

        }
    }

    render(){
         return(

            <div className="main-home-container">
            {
                this.state.lastThreeTransactions.length===0?this.renderLoadingView()
           
   :        <div className="home-container">
                
   <Sidebar/>
   <Header/>
   <div className="sidebar-container-11">
   
       
<Navbar/>
<div className="credit-debit-container">
    <Credit credit={this.state.totalDebitAndCredit.credit}/>
    <Debit debit={this.state.totalDebitAndCredit.debit}/>
   
    </div>
<h1 className="Last-Transaction">Last Transaction</h1>
<ul className="last-three-transaction-container">
   


   
       {this.state.lastThreeTransactions.map(eachTransaction=>(
           <LastThreeCard  transaction={eachTransaction} key={eachTransaction.id} onDelete={this.onDelete}/>
       ))}
   


</ul>
<h1 className="bar-cahrt-heading">Debit & Credit Overview</h1>
<BarChart dayName={this.state.dayName} credit={this.state.credit} debit={this.state.debit}/>
</div>
</div>
    }
    </div>

    
        )
    }
}

export default Home