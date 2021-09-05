// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const username = React.useRef(null)
  const [usernameValue, setUsernameValue] = React.useState(null)
  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        onSubmitUsername(usernameValue)
      }}
    >
      <div>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          ref={username}
          value={usernameValue}
          onChange={event => {
            setUsernameValue(event.target.value.toLowerCase())
          }}
          type="text"
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
