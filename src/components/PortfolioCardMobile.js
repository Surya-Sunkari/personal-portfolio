const PortfolioCardMobile = ({src, name, demo, code, paper, paper_name}) => {
    return ( 
        <>
            <img src={src} alt="" className='rounded-md duration-200 h-44 w-full object-fill'/>
            <h2 className=' text-xl text-center font-bold mt-2'>{name}</h2>
            <div className='flex justify-evenly py-2'>
                {demo!==undefined && 
                    <a href={demo} target='_blank' rel='noreferrer'>
                        <button className='px-1 py-1 my-1 mx-2 duration-200 hover:text-yellow-200 hover:scale-110'>Demo</button>
                    </a>
                }
                {code!==undefined &&
                    <a href={code} target='_blank' rel='noreferrer'>
                        <button className='px-1 py-1 my-1 mx-2 duration-200 hover:text-yellow-200 hover:scale-110'>Code</button>
                    </a> 
                }        
                {paper!==undefined && 
                    <a href={paper} download={paper_name} target='_blank' rel='noreferrer'>
                        <button className='px-1 py-1 my-1 mx-2 duration-200 hover:text-yellow-200 hover:scale-110'>Paper</button>
                    </a>
                }
            </div>
        </>
    );
}
 
export default PortfolioCardMobile;