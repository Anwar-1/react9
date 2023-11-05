import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  
  const [query,setquery] = useState('');
  const search_url=`https://api.themoviedb.org/3/search/movie?api_key==b4462c37cc0d31b8a5cc2fb895cf6b14${query}`;

  const setserach =() =>{
    setquery(search_url)
  }

  return (
    <>
 <nav className="d-flex  flex-row align-items-center p-3 
    px-4 mb-3 bg-dark text-white ">
  
  <Link  style={{"textDecoration":"none"}} to="/" className="p-2  text-white h3">MovieDp App</Link>     
  
  <Link style={{"textDecoration":"none"}}    to="Trending" className="p-2 text-white h3 ">Trending</Link> 
    
      <form className="d-flex ms-auto mr-5"  role="search">
        <input className="form-control me-2" type="search" placeholder="Movies Search" value={query}  onChange={(e) =>  setquery(e.target.value)}   aria-label="Search" />
        {console.log(query)}
        <button className="btn btn-outline-secondary"  onClick={setserach} type="submit">Search</button>
      </form>
   
  
</nav>
 
   
    </>
  )
}

export default Navbar