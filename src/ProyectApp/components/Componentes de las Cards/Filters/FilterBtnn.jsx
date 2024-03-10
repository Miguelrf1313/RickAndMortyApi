

export const FilterBtnn = ({index, name, items, task, setPages}) => {

  return(
 
    <div>
        <style jsx>
          {
            `
            .x:checked + label {
              background-color: #0b5ed7;
              color: white;
            }


            input[type="radio"] {
              display: none;
            }
            `
          }
        </style>


      <div className="form-check">
        <input
        onChange={()=> {
        setPages(1)
        task(items)}
        }
          className="form-check-input x"
          type="radio"
          name={name}
          id={`${name}-${index}`}
        />
        <label className="btn btn-outline-primary" for={`${name}-${index}`}>
          {items}
        </label>
      </div>
    </div>
  );
  
};
