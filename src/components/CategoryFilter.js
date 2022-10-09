import React, {useState} from "react";

function CategoryFilter({categories, setSelectedCategory}) {
  const [classSel, selectedClass]=useState(true)

  
  function handleCLick(event){
    selectedClass(!classSel)
    setSelectedCategory(event.target.value)
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((cat) => {
        return(
          <button class={classSel ? "selected" : " "} onClick = {handleCLick} value = {cat}>{cat}</button>
        )
      })}
    </div>
  );
}

export default CategoryFilter;
     