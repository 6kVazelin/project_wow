import dollar from './assets/dollar.svg'
import './MainForm.css'
import send from './assets/send.svg'
function MainForm() {
    return (
        <>
            <div className='grid place-items-center text-white'>
                <p className='font-normal'>Возврат бонусов</p>

                    

                <div className='max-w-150 min-h-30 mt-2 grid grid-cols-4 grid-rows-4 gap-3 text-white'>
                    <button className='box min-h-15 max-w-30 min-w-25 flex items-center justify-center'>

                        <svg className='fill-white pr-1' width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.4268 1.15357C10.6622 0.679929 11.3378 0.679929 11.5732 1.15356L14.3921 6.82711C14.4853 7.01467 14.6643 7.14477 14.8715 7.17544L21.1385 8.10317C21.6616 8.18061 21.8704 8.8232 21.4927 9.19337L16.9679 13.6275C16.8183 13.7741 16.7499 13.9846 16.7848 14.1911L17.8391 20.4381C17.9271 20.9596 17.3805 21.3567 16.9117 21.1118L11.2963 18.1788C11.1107 18.0818 10.8893 18.0818 10.7037 18.1788L5.08832 21.1118C4.61954 21.3567 4.07292 20.9596 4.16093 20.4381L5.21521 14.1911C5.25006 13.9846 5.18166 13.7741 5.03208 13.6275L0.507314 9.19337C0.12958 8.8232 0.338367 8.18061 0.861542 8.10317L7.1285 7.17544C7.33567 7.14477 7.51474 7.01467 7.60793 6.82711L10.4268 1.15357Z" />
                            
                        </svg>

                        Бонусов</button>

                    <input placeholder="Введите количество бонусов" className='box min-w-70 col-span-3 p-2' />

                    <button className='box max-w-30 flex items-center justify-center'>
                        <img className='mr-1' src={dollar} alt="dollar" />
                        USDT</button>

                    <input placeholder="Итоговая сумма" className='box min-w-70 col-span-3 p-2' />

                    <p></p>

                    <p className='col-span-3 pl-2 text-xs text-stone-400'>Комиссия будет расчитана после конечной суммы</p>

                    <div className='box min-w-70 col-span-4 grid grid-cols-5 p-2'>
                        <input placeholder="Номер кошелька" className='col-span-4' />

                        
                        <div className='flex place-content-end'>
                        <button className=' flex min-w-10 items-center justify-center rounded-xl bg-emerald-500'><img src={send} className='max-h-4 min-h-4 min-w-4 max-w-4' alt="send" /></button>
                        </div>
                    </div>

                </div>
                    
            </div>


        </>

  );
}

export default MainForm;