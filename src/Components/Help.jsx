import React from 'react'
import { FaQuestion } from "react-icons/fa";
import { Link } from "react-router-dom";

function Help() {
  return (
      <Link to={'/home'}>
        <FaQuestion icon="fa-regular fa-square-question" className='text-white hover:opacity-25'/>
      </Link>
  )
}

export default Help