import {createContext,useReducer} from 'react'
import GitHubReducer from './GitHubReducer'

const GithubContext = createContext()
const API_URL = process.env.REACT_APP_API_URL
const  TOKEN  = process.env.REACT_APP_TOKEN_AUTHENTICATION
export const GitHubProvider = ({children})=>{
   
    const initialState = {
        users: [],
        isLoading: false,
        user: {},
        repos:[],


    }

    const[state,dispatch]=useReducer(GitHubReducer,initialState)

    const setLoading = ()=>{

        dispatch({
            type:'SET_LOADING'
            
        })
    }

    const fetchSearchedUsers= async(text)=>{

        setLoading()

        const params = new URLSearchParams({
            q: text,

        })

        const response = await fetch(`${API_URL}/search/users?${params}`,{

            headers: {
                Authorization: `token ${TOKEN}`
            },

            
        })


        const {items}= await response.json()
        

        dispatch({

            type:'GET_USERS',
            payload: items
        })
        

    }

    const getRepos= async(login)=>{

        setLoading()

        

        const response = await fetch(`${API_URL}/users/${login}/repos`,{

            headers: {
                Authorization: `token ${TOKEN}`
            },

            
        })


        const data= await response.json()
        

        dispatch({

            type:'GET_REPOS',
            payload: data
        })
        

    }

    const fetchUser = async (user)=>{

        setLoading()
        const response = await fetch(`${API_URL}/users/${user}`,{headers:{
            Authorization : `token ${TOKEN}`
        },}
        
        )
        if(response.status==='404'){
            window.location('/notfound')
        } else {const data = await response.json()
        dispatch({
            type:'FETCH_USER',
            payload: data

        })}
        
    }

    const clearUsers = ()=>{

        dispatch({
            type:'CLEAR_USERS',
            payload: []

        })



    }

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
        users: state.users,
        user: state.user,
        isLoading: state.isLoading,
        fetchSearchedUsers,
        clearUsers,
        fetchUser




    }}>


    {children}
    </GithubContext.Provider>)
}
export default GithubContext