const initalState = {
    token:"",
    emailId:"",
    role:"",
    firstName:"",
    userId:""
}

const userLoginReducer =( state=initalState, action)=>{

    console.log("inside reducer")
    console.log(action.user)
    console.log(action.type)
    console.log("inside reducer")
        switch (action.type){
            case 'USERSTATEUPDATE':
                console.log(action.user)
                console.log(action.user['role'])
                console.log(action.user['emailID'])
                

                return (
                    {...initalState,
                        emailId:action.user.emailID,
                        token:action.token,
                        role:action.user.role,
                        firstName:action.user.firstName,
                        userId:action.user.userId
                    }
                )

            case 'USERLOGOUT':
                console.log("inside logout")

                return (initalState)
                
            default:
                return initalState
        }
}



export default userLoginReducer;