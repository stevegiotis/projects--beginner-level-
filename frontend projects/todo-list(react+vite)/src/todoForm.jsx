import { useState } from "react"


export function NewForm({ onSubmit }){

    const [newItem, setNewItem] = useState("")
    

    function handleSubmit(e) {
        e.preventDefault()
        if(newItem === "") return;
        
        onSubmit(newItem)
    
        setNewItem("")
    }

    return (
          <form onSubmit={handleSubmit} className="new-Item-Form">
            <div className="form-row">
              <label htmlFor="item">New item</label>
              <input
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                type="text"
                id="text"
              />
            </div>
            <button className="btn">Add</button>
          </form>
    )
}