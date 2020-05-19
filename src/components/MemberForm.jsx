import React from 'react'

const centered = {
    display: 'flex', 
    alignItems: 'center',
    flexDirection: 'column'}

//3️⃣
export default function MemberForm(props) {
  const { values, onInputChange, onSubmit } = props

  return (
    //4️⃣  - Give the form an `onSubmit` event handler
    <form
        style={centered}
        className='form container' 
        onSubmit={onSubmit}>
      <div 
        className='form-group submit'
        style={centered}>
        <h2>Add a Member!</h2>
        <button>submit</button>
      </div>

      <div 
        className='form-group inputs'
        style={centered}>
        <h4>Please enter member information here!</h4>

        {/* ////////// TEXT INPUTS ////////// */}
        <label>Name:&nbsp;

          {/*5️⃣ - input for username */}

          <input
            type='text'
            placeholder='Member Name'
            maxLength='20'
            name='name'
            value={values.name}
            onChange={onInputChange}
          />
        </label>

        <label>Email:&nbsp;

          {/*6️⃣ - input for email. */}

          <input
            type='text'
            placeholder='Email Address'
            maxLength='20'
            name='email'
            value={values.email}
            onChange={onInputChange}
          />
        </label>

        <label>Role:&nbsp;

          {/*7️⃣ - Dropdown selections for role. */}

          <select 
            name='role' 
            value={values.role} 
            onChange={onInputChange}>
              <option value='' >Select a Role</option>
              <option value='Backend Engineer'>Backend Engineer</option>
              <option value='Frontend Engineer'>Frontend Engineer</option>
              <option value='Data Scientist'>Data Scientist</option>
              <option value='UX Designer'>UX Designer</option>
              <option value='Project Manager'>Project Manager</option>
          </select>
        </label>
      </div>
    </form>
  )
}