function StateUpdateWithoutHooks(){

      let fullName = "suresh";

      const onchangeHandler=(event)=>{
        fullName = event.target.value;
        console.log(fullName);
      }

      return (
        <>
        <div>{fullName}</div>
        <div><input type="text" onChange={onchangeHandler}/></div>
        </>
      )
}
export default StateUpdateWithoutHooks;