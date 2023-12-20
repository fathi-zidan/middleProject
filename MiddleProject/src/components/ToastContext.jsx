import React, { createContext, useContext, useState } from 'react'
import { MdOutlineCancel } from "react-icons/md";
export const toastContext = createContext();
// export const useToast = ()=> useContext(toastContext);

function ToastContextProvider({children}) {
    const [toasts,setToasts] = useState([]);

    const openT = (component,timeout = 5000)=>{
        const id = Date.now();
        setToasts([...toasts,{id, component}]);
        setTimeout(() => close(id), timeout)
    }

    const close = (id) => {
        setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id))
    }

  return (
    <toastContext.Provider value={{openT,close}}>
        {children}
        {toasts.map(({ id, component }) => (
          <div key={id} className='relative'>
            <button onClick={()=>close(id)}
             className='absolute top-2 right-2 p-1 rounded-lg bg-gray-200/20 text-gray-800/60'>
                <MdOutlineCancel size={16}/>

            </button>
           
          </div>
        ))}
       
    </toastContext.Provider>
    
  )
}

export default ToastContextProvider
