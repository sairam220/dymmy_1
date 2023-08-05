import React from 'react' 
 import { useEffect } from 'react'; 
 import {CategoryScale,Chart,LinearScale,BarElement,Legend,Title,Tooltip} from 'chart.js';  
 import {Bar} from 'react-chartjs-2' 
 

 Chart.register(CategoryScale,LinearScale,BarElement,Legend,Title,Tooltip) 
  
 const labels = ['sun','mon','tue','wed','thu','fri','sat'] 
  
  
 const data = { 
     labels, 
     datasets : [ 
         { 
             label:'debit', 
             data:[1000,600,500,600,500,600,800], 
             backgroundColor:'#4D78FF', 
             borderRadius: 10, 
         }, 
         { 
             label:'credit', 
             data:[900,550,450,800,600,700,700], 
             backgroundColor:'#FCAA0B', 
             borderRadius: 10, 
         } 
     ] 
  
 } 
  
 const options ={ 
  
     plugins:{ 
         legend:{ 
             position:'top' 
         }, 
         title:{ 
             display:true, 
             text:'$7,560 Debited & $5,420 Credited in this Week' 
         } 
     } 
 } 
  

  
 const BarChart = () => { 
     useEffect(() => { 
         getLastWeekCreditDebit() 
         getLastWeekCreditDebitAdmin() 
       }, [] 
     ) 
  
     const getLastWeekCreditDebit = async () => { 
         const userId = 1
         const apiUrl = `https://bursting-gelding-24.hasura.app/api/rest/daywise-totals-7-days` 
         const options = { 
         headers: { 
             'Content-Type' : 'application/json', 
             'x-hasura-admin-secret': 'g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF', 
             'x-hasura-role' : 'user', 
             'x-hasura-user-id' : userId, 
         }, 
         method: 'GET', 
         } 
         const response = await fetch(apiUrl, options) 
  
         if (response.ok) { 
             const fetchedData = await response.json() 
           console.log(fetchedData,'react chart') 
         } 
       } 
  
       const getLastWeekCreditDebitAdmin = async () => { 
         const apiUrl = `https://bursting-gelding-24.hasura.app/api/rest/daywise-totals-last-7-days-admin` 
         const options = { 
         headers: { 
             'Content-Type' : 'application/json', 
             'x-hasura-admin-secret': 'g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF', 
             'x-hasura-role' : 'admin', 
         }, 
         method: 'GET', 
         } 
         const response = await fetch(apiUrl, options) 
  
         if (response.ok) { 
             const fetchedData = await response.json() 
             console.log(fetchedData,'react chart admin') 
         } 
       } 
  
       const renderCharts = () =>{ 
  
         return ( 
             <div className='chart'> 
                 <Bar data={data} options={options} /> 
             </div> 
         ) 
       } 
  
  
       // const renderChartsData = () => { 
       //   switch (apiStatus) { 
       //     case apiStatusConstants.success: 
       //       return renderCharts() 
       //     case apiStatusConstants.failure: 
       //       return FailureView() 
       //     case apiStatusConstants.inProgress: 
       //       return LoadingView() 
       //     default: 
       //       return null 
       //   } 
       // } 
  
   return ( 
     <div className='main-container-chart'> 
         <h1 className='accounts-head-charts'>Debit & Credit Overview</h1> 
         {renderCharts()} 
     </div> 
   ) 
 } 
  
 export default BarChart


 