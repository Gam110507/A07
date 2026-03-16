"use client";

import { SyntheticEvent } from "react";

export default function InteractiveCard({children,}: {children: React.ReactNode;}) {
    function onMouseEvent(event:SyntheticEvent) {
        if(event.type == 'mouseover') {
            event.currentTarget.classList.remove('shadow-lg') ;
            event.currentTarget.classList.add('shadow-2xl') ;
            event.currentTarget.classList.remove('bg-white') ;
            event.currentTarget.classList.add('bg-neutral-200') ;
        } else {
            event.currentTarget.classList.add('shadow-lg') ;
            event.currentTarget.classList.remove('shadow-2xl') ;
            event.currentTarget.classList.add('bg-white') ;
            event.currentTarget.classList.remove('bg-neutral-200') ;
        }
    }
  return (
    <div className="w-full h-[400px] bg-white shadow-lg rounded-lg" onMouseOver={(e)=>onMouseEvent(e)} onMouseOut={(e)=>onMouseEvent(e)}>
        { children }
    </div>
  );
}
