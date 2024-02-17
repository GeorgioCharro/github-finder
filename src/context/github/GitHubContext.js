import {createContext,useReducer} from 'react'
import GitHubReducer from './GitHubReducer'

const GithubContext = createContext()

export const GitHubProvider = ({children})=>{
   
    const initialState = {
        users: [],
        isLoading: false,
        user: {},
        repos:[],


    }

    const[state,dispatch]=useReducer(GitHubReducer,initialState)

   

    

    

    
    

    //fetch all users
    /*
    const fetchUsers = async()=>{

        setLoading()

        const response = await fetch(`${API_URL}/users`,{

            headers: {
                Authorization: `token ${TOKEN}`
            },
        })


        const data= await response.json()
        

        dispatch({

            type:'GET_USERS',
            payload: data
        })
        

    }
    */


    return (<GithubContext.Provider value={{
        ...state,
        dispatch,
    }}>


    {children}
    </GithubContext.Provider>)
}
export default GithubContext