import React from 'react'
import './HighlightText.css'

function HighlightText({ text, color = "var(--burnt-tangerine)" }) {
  return (
    <span 
      className="chunky-highlight" 
      style={{ backgroundColor: color }}
    >
      {text}
    </span>
  )
}
export default HighlightText;