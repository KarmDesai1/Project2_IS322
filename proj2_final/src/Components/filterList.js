import React from 'react';

class filterList extends React.Component{
  state={
    sortBy: 'id'
  }

  onFilterSelection(event, filterChoice){
    this.setState({sortBy: filterChoice});
    this.props.orderBy(filterChoice);
  };
  render() {
    return (
    <div>
     <form>
         <label htmlFor="filter" style={{padding: '1rem'}}>
             Order by:
         </label>
         <select id="filter" onChange={(event)=>{
             this.onFilterSelection(event, event.target.value)}}>
             <option value="type">type</option>
             <option value="name">name</option>
             <option value="id">id</option>
             <button>
                 Submit
             </button>
         </select>
     </form>
    </div>);
  }

}
export default filterList;



