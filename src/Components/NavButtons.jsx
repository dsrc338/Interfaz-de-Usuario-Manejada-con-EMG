import React from 'react'

function NavButtons({nameNav}) {
  return (
      <button className='bg-teal-500 hover:opacity-25 rounded w-24 h-12 text-xl my-0 font-semibold text-white display: block mr-auto ml-auto'>{nameNav}</button>
  )
}

export default NavButtons