// src/components/StatusFilter.js
import React from 'react';

const StatusFilter = ({ onFilter }) => {
  return (
    <div className="mb-3">
      <label className="form-label">Filtrar por Estado:</label>
      <select onChange={(e) => onFilter(e.target.value)} className="form-select">
        <option value="">Todos os estados</option>
        <option value="completed">Concluídas</option>
        <option value="pending">Pendentes</option>
      </select>
    </div>
  );
};

export default StatusFilter;