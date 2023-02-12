import "./form.css"
import React from 'react'

const Form = () => {
  return (
    <div className="form">
        <form>
            <label>Your name</label>
            <input type="text"></input>
            <label>Email</label>
            <input type="email"></input>
            <label>Subject</label>
            <input type="text"></input>
            <label>Message</label>
            <textarea rows="5" placeholder="Type your message here"></textarea>
            <button type="submit" className="btn">Submit</button>
        </form>
    </div>
  )
}

export default Form;