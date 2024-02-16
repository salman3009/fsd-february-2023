import React, { useReducer, useEffect, useState } from "react";

const initialState = { hotels: [], filteredHotels: [] };

function reducer(state, action) {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return { ...state, hotels: action.payload }
    case "FILTER":
      let result = state.hotels.filter((obj) => {
        return obj.city.toLowerCase().includes(action.payload.toLowerCase());
      })
      return { ...state, filteredHotels: result };
    default:
        return state;

  }
}
export default function Home() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [input,setInput] = useState('');


  const initialRendering = async () => {
    try {
      let response = await fetch("https://content.newtonschool.co/v1/pr/63b85bcf735f93791e09caf4/hotels");
      let data = await response.json();
      console.log(data);
      dispatch({ type: "FETCH_SUCCESS", payload: data });
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    initialRendering();
  }, [])


  const onChangeHandler = (event) => {
    setInput(event.target.value);
  }

  useEffect(() => {
    dispatch({ type: "FILTER", payload: input })
  }, [input])

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Enter city name"
        value={input}
        onChange={onChangeHandler}
      />

      {
        state.filteredHotels.map((obj, index) => {
          return (
            <p key={index}>{obj.hotel_name}</p>
          )
        })
      }

    </div>
  );
}
