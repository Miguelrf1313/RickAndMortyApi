import React from "react";
import Acor from './Acor'

export const Filters = () => {
  return (
    <div className="col-10">
      <div className="text-center fw-bold fs-4 mb-2">Filtrar</div>
      <div style={{cursor:'pointer'}} className="text-center text-primary text-decoration-underline">Limpiar Filtro</div>
    
        <Acor/>
    
    </div>
  );
};
