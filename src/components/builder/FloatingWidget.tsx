import { ReactNode } from "react";
import Draggable from "react-draggable";

export default function FloatingWidget({
  children,
}:{
  children:ReactNode
}){

return(

<Draggable>

<div className="fixed top-40 right-10 rounded-2xl bg-[#111827] border border-white/10 p-5">

{children}

</div>

</Draggable>

);

}
