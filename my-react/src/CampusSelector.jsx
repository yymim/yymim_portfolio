import React, { useState } from 'react';

function CampusSelector() {
  const [selectedCampus, setSelectedCampus] = useState('A캠퍼스');

  const handleChange = (e) => {
    setSelectedCampus(e.target.value);
  };

  return (
    <div>
      <label htmlFor="campus-select">캠퍼스 구분: </label>
      <select id="campus-select" value={selectedCampus} onChange={handleChange}>
        <option value="A캠퍼스">A캠퍼스</option>
        <option value="B캠퍼스">B캠퍼스</option>
        <option value="C캠퍼스">C캠퍼스</option>
      </select>
      <p>선택된 캠퍼스: {selectedCampus}</p>
    </div>
  );
}

export default CampusSelector;
