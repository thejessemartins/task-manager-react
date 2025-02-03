// src/components/CategoryFilter.js
import React from 'react';

const CategoryFilter = ({ categories, onFilter }) => {
  return (
    <div className="mb-3">
      <label className="form-label">Filtrar por Categoria:</label>
      <select
        onChange={(e) => onFilter(e.target.value)}
        className="form-select"
      >
        <option value="">Todas as categorias</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;