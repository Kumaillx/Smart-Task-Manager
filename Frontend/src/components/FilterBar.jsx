
function FilterBar({ categories, selectedCategory, setSelectedCategory, deadlineFilter, setDeadlineFilter }) {
  return (

    <div style={{ margin: '10px 0' }}>
      
      <label>
        Filter by Category:
        {/* The value = selectedCategory state ). */}
        {/* event trigger, calls setSelectedCategory with (e.target.value). */}
        <select value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)}>
          <option value="">All</option>
          
          {/* Creation of the dropdown options using the categories array. */}
          {/* each category is rendered as an option element. */}
          {categories.map((cat, i) => ( 
            <option key={i} value={cat}>{cat}</option> 
          ))}
        
        </select>
      
      </label>

      <label style={{ marginLeft: '20px' }}>
        Deadline:
        
        <select value={deadlineFilter} onChange={e => setDeadlineFilter(e.target.value)}>
          <option value="">All</option>
          <option value="today">Today</option>
          <option value="upcoming">Upcoming</option>
          <option value="overdue">Overdue</option>
        </select>
      
      </label>
    
    </div>
  );
}

export default FilterBar;
