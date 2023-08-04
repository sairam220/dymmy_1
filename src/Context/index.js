import React from 'react'


const LoginContext=React.createContext({
      userId:'',
      adminUserOrNot:false,
      setUserId:()=>{},
      setAdminUserOrNot:()=>{}
})

export default LoginContext