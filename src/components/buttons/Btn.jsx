import styles from "./Button.module.css";
const btn = ({isOutline , icon , text, ...reset}) => {
  return (
   <>  {...reset}
   <div className="{isOutline ? styles.outine_btn : style.primary_btn} ">
  <button>  
    {icon}
    {text}
  {/* <p className=' flex gap-2 my-4 p-1 rounded-2xl bg-black text-white border-solid border-4 border-amber-950 justify-center items-center'><MdMessage /> VIA SUPPORT CHAT</p> */}
  </button>
   </div>
   </>
    
  )
}
export default btn
