import {useCallback, useEffect, useRef, useState} from "react";

function App() {

  const [message, setMessage] = useState("")
  const iterRef = useRef(0)

  const adjustForKeyboard = useCallback(() => {
    iterRef.current = iterRef.current + 1
    const height = window.innerHeight;
    const newHeight = `${height}px`
    document.getElementById('root')!.style.minHeight = newHeight;
    setMessage(`height is now: ` + newHeight)
  }, [])

  useEffect(() => {
    adjustForKeyboard();

    // Adjust whenever the window resizes (e.g., when the keyboard appears)
    window.addEventListener('resize', adjustForKeyboard);

    return () => {
      window.removeEventListener('resize', adjustForKeyboard)
    }

  }, [adjustForKeyboard])

  return (
    <>
      <div style={{display: 'flex', flexGrow: 1, flexDirection: 'column'}}>

        <div contentEditable={true} style={{flexGrow: 1, margin: 4}} onClick={adjustForKeyboard}>
          This is the content editable region
        </div>

        <div  onClick={adjustForKeyboard}>
          {iterRef.current}: {message}
        </div>

        <button onClick={adjustForKeyboard}>
          adjust
        </button>

        <div style={{padding: 8}} >
          <button><b>B</b></button>
          <button><i>I</i></button>
        </div>
      </div>
    </>
  )
}

export default App
