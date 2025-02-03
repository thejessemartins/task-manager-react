// src/components/SearchBar.js
import React from 'react';

const SearchBar = ({ onSearch }) => {
  return (
    <div className="mb-3">
      <label className="form-label">Pesquisar Tarefas:</label>
      <input
        type="text"
        placeholder="Digite o título da tarefa"
        onChange={(e) => onSearch(e.target.value)}
        className="form-control"
      />
    </div>
  );
};

export default SearchBar;