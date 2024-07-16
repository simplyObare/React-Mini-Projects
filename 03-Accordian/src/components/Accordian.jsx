import { useState } from 'react'
import data from '../data/data'

export default function Accordian() {
  const [selected, setSelected] = useState(null)
  const [enableMultiSelection, setEnableMultiSelection] = useState(false)
  const [multiple, setMultiple] = useState([])

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId)
  }

  function handleMultiSelection(getCurrentId) {
    let copyMutiple = [...multiple]
    const findIndexOfCurrentId = copyMutiple.indexOf(getCurrentId)

    console.log(findIndexOfCurrentId)
    if (findIndexOfCurrentId === -1) copyMutiple.push(getCurrentId)
    else copyMutiple.splice(findIndexOfCurrentId, 1)

    setMultiple(copyMutiple)
  }

  console.log(selected, multiple)
  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        Enable Multi Selection
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div key={dataItem.id} className="item">
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {enableMultiSelection
                ? multiple.indexOf(dataItem.id) !== -1 && (
                    <div className="content ">{dataItem.answer}</div>
                  )
                : selected === dataItem.id && (
                    <div className="content ">{dataItem.answer}</div>
                  )}
            </div>
          ))
        ) : (
          <div>ERROR: No data found !</div>
        )}
      </div>
    </div>
  )
}
