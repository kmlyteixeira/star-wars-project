import React from 'react'
import { PopupDiv } from "../styled"

function Popup(props: any) {
  return (props.trigger) ? (
    <PopupDiv>
      <div className="popup-inner">
        <img className="close-btn" onClick={() => props.setTrigger(false)} src='../../../../../close.png'/>
        { props.children }
      </div>
    </PopupDiv>
  ) : "";
}

export default Popup
