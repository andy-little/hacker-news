import React from 'react'
import { useGlobalContext } from './context'

const Buttons = () => {
  const {page, numbPages, handlePage, loading} = useGlobalContext();
  if(!loading){

  return <div className="pagination">

      <div className="pagination-container">
        {page > 0 ? <p className=" pagination-title colour-b" onClick={()=>handlePage(page-1)}>H</p> : <p className=" pagination-title colour-b" style={{cursor: 'initial'}}>H</p>}
        {page > 0 && <p className="page-number word" onClick={()=>handlePage(page-1)}>Previous</p>}
      </div>

      <div className="pagination-container">
        {page - 2 > 0 && <p className="pagination-title colour-y" onClick={()=>handlePage(page-3)}>a</p>}
        {page - 2 > 0 && <p className="page-number numb-only" onClick={()=>handlePage(page-3)}>{page - 2}</p>}
      </div>
      <div className="pagination-container">
        
        {page - 1 > 0 && <p className="pagination-title colour-y" onClick={()=>handlePage(page-2)}>a</p>}
        {page - 1 > 0 && <p className="page-number numb-only" onClick={()=>handlePage(page-2)}>{page - 1}</p>}
        
      </div>
      <div className="pagination-container">
        {page > 0 && <p className="pagination-title colour-y" onClick={()=>handlePage(page-1)}>a</p>}
        {page > 0 && <p className="page-number numb-only" onClick={()=>handlePage(page-1)}>{page}</p>}
      </div>

      <div className="pagination-container">
        {loading || <p className="pagination-title colour-r"> a</p>}
        {loading || <p className="page-number page-current numb-only"> {page + 1}</p>}
      </div>


      <div className="pagination-container">
        {page + 2 < numbPages - 1 && <p className="pagination-title colour-y" onClick={()=>handlePage(page+1)}>a</p>}
        {page + 2 < numbPages - 1 && <p className="page-number numb-only" onClick={()=>handlePage(page+1)}>{page + 2}</p>}
      </div>


      <div className="pagination-container">
        {page + 3 < numbPages - 1 && <p className="pagination-title colour-y" onClick={()=>handlePage(page+2)}>a</p>}
        {page + 3 < numbPages - 1 && <p className="page-number numb-only" onClick={()=>handlePage(page+2)}>{page + 3}</p>}
      </div>


      <div className="pagination-container">
        {page + 4 < numbPages - 1 && <p className="pagination-title colour-y" onClick={()=>handlePage(page+3)}>a</p>}
        {page + 4 < numbPages - 1 && <p className="page-number numb-only" onClick={()=>handlePage(page+3)}>{page + 4}</p>}
      </div>
<div className="pagination-container">
  
        {page + 2 < numbPages - 1 ? <p className="pagination-title" onClick={()=>handlePage(page+1)}><span className="colour-y">c</span><span className="colour-b">k</span><span className="colour-g">e</span><span className="colour-r">r</span></p> :
        <p className="pagination-title" style={{cursor: 'initial'}}><span className="colour-y">c</span><span className="colour-b">k</span><span className="colour-g">e</span><span className="colour-r">r</span></p> }
        {page + 2 < numbPages - 1 && <p className="page-number word" onClick={()=>handlePage(page+1)}>Next</p>}
</div>
    </div>
  }

  return ''

}

export default Buttons
