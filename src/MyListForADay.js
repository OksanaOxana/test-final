const MyListForADay = ({taskPlans, addTask}) => {
    return(
        <div>
            <div>
            <h1>My plan</h1>
            <button onClick={addTask}>Add</button>
            </div>
            
                {taskPlans.map(({title}) => (
                <div>    
                    <p>{title}</p>
                     <button>Delete</button>
                </div> 
                ))}
          
        </div>
    )
}
export default MyListForADay;