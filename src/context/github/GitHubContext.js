import {createContext,useReducer} from 'react'
import GitHubReducer from './GitHubReducer'

const GithubContext = createContext()
const API_URL = process.env.REACT_APP_API_URL
const  TOKEN  = process.env.REACT_APP_TOKEN_AUTHENTICATION
export const GitHubProvider = ({children})=>{
    const initialStat = {
        users:[],
        isLoading:true

    }

    const [state,dispatch] = useReducer(GitHubReducer,initialStat)


    
    const fetchUsers = async()=>{

        

        const response = await fetch(`${API_URL}/users`,{

            headers: {
                Authorization: `token ${TOKEN}`
            },
        })


        const data= await response.json()
        
        dispatch({

            type:'GET_USERS',
            payload: data,
        })

    }


    return (<GithubContext.Provider value={{
        users: state.users,
        isLoading: state.isLoading,
        fetchUsers,




    }}>


    {children}
    </GithubContext.Provider>)
}
export default GithubContext