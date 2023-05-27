const initalState = {
    token:"",
    emailID:"",
    role:"",
    firstName:"",
    userId:""
}

const userLoginReducer =( initalState, action)=>{
        switch (action.type){
            case 'updateUserState':
                return (
                    {...initalState,emailID:action.value.emailID}
                )
            default:
                return initalState
        }
}

export default userLoginReducer;