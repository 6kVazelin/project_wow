{/* import { useState } from 'react'*/ }

import mainLogo from './assets/logotype.svg'
import star from './assets/star.svg'

function MainLogo() {
    {/* const [count, setCount] = useState(0) */}

  return (
    <>

      <div className='grid place-items-center text-white'>
    
          
                  <img src={mainLogo} className='mb-20 mt-10' alt="Main logo" />
            
              <p className='m-0 p-0 font-normal'>Ваш баланс:</p>
              <p className='m-0 p-0 text-8xl font-bold'>100 500.96</p>
              
      </div>
          <div className='mb-10 flex items-center justify-center text-white'>
             <img src={star} alt="star" />
              <p className='ml-1 font-medium'> Бонусов</p>
              
              </div>
          {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p className='underline'>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div> 
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
          </p>
          <ul className='flex items-center gap-5 text-blue-300' >
              <li>IMAGE</li>
              <li>IMAGE</li>
              <li>IMAGE</li>

          </ul>*/}
    </>
  )
}

export default MainLogo
