import React, { useState } from "react";
import "../styles/App.css";

function FoodList() {
	const [foods, setFoods] = useState([]);
	const [itemName, setItemName] = useState("");
	const [foodType, setFoodType] = useState("");
	const [spicinessLevel, setSpicinessLevel] = useState("");
	const [isFirstCardEnabled, setIsFirstCardEnabled] = useState(false);
	const [isSecondCardEnabled, setIsSecondCardEnabled] = useState(false);
	const [isFormEnabled, setIsFormEnabled] = useState(false);


    const addFoodHandler=()=>{
        setIsFirstCardEnabled(true);
        setIsSecondCardEnabled(true);
    }

    const handleFormClick=()=>{
        setIsFormEnabled(true);
    }

    const onSaveHandler=()=>{
        setFoods([...foods,{itemName:itemName,foodType:foodType,spicinessLevel:spicinessLevel}])
        setIsFirstCardEnabled(false);
        setIsSecondCardEnabled(false);
        setIsFormEnabled(false);
    }

    const onDeleteHandler=(index)=>{
     let list = [...foods];
     list.splice(index,1);
     setFoods(list);
    }


	return (
		<>
			<div className="container">
				<h1>Food Items List</h1>
				<button onClick={addFoodHandler}>Add Food</button>

				<div className="card-container">
                        {isFirstCardEnabled && <>
							<h2>Item Name:</h2>
							<input
								name="itemName"
								type="text"
                                onChange={(e)=>setItemName(e.target.value)}
								disabled={!isFirstCardEnabled}
							/>
							<h2>Food Type:</h2>
							<input
								name="foodType"
								type="text"
                                onChange={(e)=>setFoodType(e.target.value)}
								disabled={!isFirstCardEnabled}
							/>
							<div className={`card`}>
								<form
                                 style={{opacity:isFormEnabled?1:0.5}}
                                 onSubmit={(e)=>{e.preventDefault()}}
                                 onClick={handleFormClick}
                                >
									<h2>Spiciness Level:</h2>
									<input
										name="spicinessLevel"
										type="text"
                                        onChange={(e)=>setSpicinessLevel(e.target.value)}
										disabled={!isFormEnabled}
									/>
								</form>
							</div>
						</>}
				</div>
                <div className={`card ${isSecondCardEnabled ? "" : "disabled"}`}>
						<button onClick={onSaveHandler}>Save</button>
				</div>

				<ul className="list">
                     {foods.map((obj,index)=>{
                          return (<li key={index}>
							{obj.itemName} ({obj.foodType}) - Spiciness Level:{" "}
							{obj.spicinessLevel}
							<button onClick={()=>onDeleteHandler(index)}>Delete</button>
						</li>)
                     })}
				</ul>
			</div>
		</>
	);
}

export default FoodList;