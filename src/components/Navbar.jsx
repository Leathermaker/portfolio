import React from 'react'

const Navbar = () => {
  return (
	<div>
		<div className='flex justify-between items-center p-4  z-20'>
		<div><img src="https://rainbowit.net/themes/inbio/wp-content/themes/inbio/assets/images/logo/logo.png" alt="user-logo" /></div>
		<div >
			<ul className='flex text-[#c4cfde] gap-14 '>
				<li className='hover:text-[#ff014f] text-sm cursor-pointer'>HOME</li>
				<li className='hover:text-[#ff014f] text-sm cursor-pointer'>FEATURE</li>
				<li className='hover:text-[#ff014f] text-sm cursor-pointer'>PORTFOLIO</li>
				<li className='hover:text-[#ff014f] text-sm cursor-pointer'>RESUME</li>
				<li className='hover:text-[#ff014f] text-sm cursor-pointer'>TESTIMONIAL</li>
				<li className='hover:text-[#ff014f] text-sm cursor-pointer'>CLIENTS</li>
				<li className='hover:text-[#ff014f] text-sm cursor-pointer'>CONTACTS</li>
			</ul>
		</div>
		</div>

	</div>
  )
}

export default Navbar