import { useState } from "react";

function OpacSearch() {
  const[searchVal, setSearch]=useState("");
  const submitSearch=(e:any)=>{
    e.preventDefault()
    window.open("https://opac.jhcsc.edu.ph/cgi-bin/koha/opac-search.pl?idx=&q="+searchVal+"&branch_group_limit=&weight_search=1", "_blank", "width=800,height=800");
  }

  return (
    <div className="opac-container">
      <div className="opac-search">
        <h4 className="text-muted">OPAC Search</h4>
        <div className="search-bar">
        <form onSubmit={submitSearch}>
          <div className="d-flex">
              <input
                className="form-control me-2"
                id="search"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={(e)=>setSearch(e.target.value)}
              />
              <button
                className="btn btn-outline-success"
                type="submit"
              >
                Search
              </button>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default OpacSearch;
