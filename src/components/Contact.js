import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='w-full h-screen bg-black p-4 text-white'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full rounded-3xl items-center'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline bg-white text-black p-2 pt-3 rounded-xl'>Contact</p>
            </div>
            <div className='flex justify-center items-center bg-stone-100 rounded-3xl max-w-screen-sm w-full mx-auto outline-black text-black'>
                <form action="https://getform.io/f/a2d0966e-f2f2-40f6-a42a-ab8e4e94b40e" method='POST' className='flex flex-col w-full md:w-4/5'>
                    <input type='text' name='name' required="required" placeholder="Full Name" className=' mx-4 p-2 bg-white rounded-md mt-8 '></input>
                    <input type='text' name='email' required="required" placeholder="Email" className='mx-4 p-2 bg-white rounded-md my-6'></input>
                    <textarea name="message" required="required" rows={6} placeholder="Message" className="mx-4 p-2 bg-white rounded-md resize-none" />
                    <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">Send</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact