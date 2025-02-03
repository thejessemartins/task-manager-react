// src/components/PriorityFilter.js
import React from 'react';

const PriorityFilter = ({ priorities, onFilter }) => {
  return (
    <div className="mb-3">
      <label className="form-label">Filtrar por Prioridade:</label>
      <select
        onChange={(e) => onFilter(e.target.value)}
        className="form-select"
      >
        <option value="">Todas as prioridades</option>
        {priorities.map((priority) => (
          <option key={priority} value={priority}>
            {priority}
          </option>
        ))}
      </select>
    </div>
  );
};

export default PriorityFilter;