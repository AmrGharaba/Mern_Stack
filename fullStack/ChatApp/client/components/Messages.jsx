import React, { useState } from 'react'

function Messages(props) {
  const { messages, handleSubmitProb, message, setMessage } = props





  return (
    <>


      <div className="card" style={{ width: '35rem ' }}>
        <ul>
          {messages.map((msg, i) => (
            <li key={i}>{msg}</li>

          ))}
        </ul>
        <div className="card-body">

          <form onSubmit={handleSubmitProb}>
            <div className="mb-3">
              <label htmlFor="PtoductTitle" className="form-label">Enter a message</label>
              <input type="text" className="form-control" id="AuthorName" aria-describedby="nameHelp" onChange={(e) => setMessage(e.target.value)} value={message}></input>
            </div>

            <div className="mb-3 text-center" >
              <button type="submit" className="btn btn-sm btn-primary" >Send</button>
            </div>
          </form>
        </div >
      </div >
    </>

  )
}

export default Messages