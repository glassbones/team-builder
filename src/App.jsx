import React, {useState} from 'react';
// UUID creates complex/random strings for ID's
import { v4 as uuid } from 'uuid'
import MemberForm from './components/MemberForm'
import Member from './components/Member'

//Team Member Values and Keys
const initTeamList = [{
  id: uuid(),
  name: 'Michael',
  email: 'michael@lambda.com',
  role: 'Student',
},]

//initial Form Values
const initFormVals = {
  name: '',
  email: '',
  role: '',
}

//1️⃣
const App =()=> {
  // State to hold members
  const [members, setMembers] = useState(initTeamList)
  // State to hold form values
  const [formVals, setFormVals] = useState(initFormVals)
  // callback to handle onChange event in < MemberForm > component
  const onInputChange = e => {
    // Set new state for the whole form
    setFormVals({ ...formVals, [e.target.name]: e.target.value })
  }
  //9️⃣ - callback to handle Submit Button in < MemberForm > component
  const onSubmit = evt => {
    // Prevent reload onSubmit click
    evt.preventDefault()
    // Prevent update any empty submissions
    // this like kinda works
    if (
      !formVals.name.trim() ||
      !formVals.email.trim() ||
      !formVals.role.trim()
    ) {
      return
    }
    //wanted to use this instead but I suck lol
    //console.log(Object.values(formVals).every(x => !x.trim()))
    const newFriend = { ...formVals, id: uuid() }
    // update the list of members state with the new member
    setMembers([ newFriend, ...members ])
    // clear the form
    setFormVals(initFormVals)
  }

  return (
    <div className='container'
    style={{
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      width: '500px'}}>
      
      <header><h1>Team Builder App</h1></header> 
      {/*2️⃣*/}
      <MemberForm
        //values= Whatever is in the form input
        values={formVals}
        //passing functions so they can be accessed from the memberform components
        onInputChange={onInputChange}
        onSubmit={onSubmit}
      />

      {/* for each member render a member component to the DOM */
        members.map(member => {
          return (
            <Member key={member.id} details={member} />
          )
        })
      }
    </div>
  )

  
}
export default App;

/*

  return (
    <div className='container'>
      <header><h1>Team Builder App</h1></header>

      <MemberForm
        // 🔥 STEP 2 - The form component needs its props.
        //    Check implementation of FriendForm
        //    to see what props it expects.
        values={formVals}
        onInputChange={onInputChange}
        onSubmit={onSubmit}
      />

      {
        members.map(friend => {
          return (
            <member key={friend.id} details={friend} />
          )
        })
      }
    </div>
  )

*/

