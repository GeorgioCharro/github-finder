import {useState,useContext} from 'react'
import GithubContext from '../../context/github/GitHubContext'
import AlertContext from '../../context/alert/AlertContext'
function UserSearch() {
   const {setAlert} = useContext(AlertContext)
   const {users,fetchSearchedUsers,clearUsers} = useContext(GithubContext)
   const[text,setText]=useState('')

   const handTextChange=(e)=>{

    setText(e.target.value)
   }

   const submitText = (e)=>{

    e.preventDefault()

    if(text===''){

      setAlert('Please write something','error')

    }else {setText('')
    fetchSearchedUsers(text)}

    
   }

   
  return (
    <div className='grid grid-col-1 xl:grid-col-4 lg:grid-col-3 md:grid-col-2'>
      <div>
        <form onSubmit={submitText}>
            <div className="formcontrol">
                <div className="relative">
                    <input value={text} onChange= {handTextChange} placeholder='Search' className="input w-full pr-40 bg-gray-200 input input-lg text-black"/>
                    <button type='submit' className=" bg-gray-300 absolute top-0 right-0 rounded-l-none w-36 btn btn-lg">
                        Go
                    </button>    
                    

                </div>

            </div>


        </form>

      </div>
      {users.length>0 && (<div>
        <button onClick={clearUsers}className="btn btn-ghost btn-lg">Clear</button>
      </div>)}
    </div>
  )
}

export default UserSearch
