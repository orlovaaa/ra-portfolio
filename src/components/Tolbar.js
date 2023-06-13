import React from "react"

export default function Toolbar(props) {
    
    
    return <div className="toolbar"> 
    {props.filters.map((item, index) => {
         return <div
                    className={item === props.selected ? "toolbar-category active-category" : "toolbar-category"} 
                    onClick={() => props.onSelectFilter(item)}
                    tabIndex={"0"} key={index}>{item}
                </div> 
    })}
        </div>
}