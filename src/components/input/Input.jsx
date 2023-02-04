import React from "react";

const input = () => {
  const inputHandler = (event) => {
    
if (event.key === 'a' || event.key === 'e' || event.key === 'i' || event.key === 'o' || event.key === 'u') {
    event.preventDefault();
    console.log('no te la muestro')
    
} else {

    console.log(event.key)
    
}



    
  };

  return (
    <div className="box">
      <div className="border border-1 border-margin w50">
        <input
          type="text"
          className="m-5"
          onKeyDown={inputHandler}
          name="nombre"
          id="id"
        />
      </div>
    </div>
  );
};

export default input;
