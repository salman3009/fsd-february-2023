import useFetch from "./useFetch";

const CustomHooks=()=>{
    
   const result = useFetch('https://jsonplaceholder.typicode.com/todos');
   
   return(<div>
      {result && result.length>0 && result.map((item)=>{
        return <p key={item.id}>{item.id}-{item.title}</p>
      })}
   </div>)
}
export default CustomHooks;