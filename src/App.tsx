import {useCallback, useEffect, useRef, useState} from "react";

const initialHeight = window.innerHeight

function App() {

  const [message, setMessage] = useState("")
  const iterRef = useRef(0)

  const adjustForKeyboard = useCallback(() => {

    if (! window.visualViewport) {
      return
    }

    iterRef.current = iterRef.current + 1
    const height = Math.floor(window.visualViewport.height);
    // const height = 434;

    const newHeight = `${height}px`
    document.getElementById('root')!.style.maxHeight = newHeight;
    setMessage(iterRef.current + ` height is now: ` + newHeight)
  }, [])

  useEffect(() => {
    adjustForKeyboard();

    // Adjust whenever the window resizes (e.g., when the keyboard appears)
    window.addEventListener('resize', adjustForKeyboard);

    return () => {
      window.removeEventListener('resize', adjustForKeyboard)
    }

  }, [adjustForKeyboard])

  const handleButtonClick = useCallback((event: React.MouseEvent) => {
    event.stopPropagation()
    event.preventDefault()
  }, [])

  return (
    <>
      <div style={{display: 'flex', flexGrow: 1, flexDirection: 'column'}}>

        <div contentEditable={true} style={{flexGrow: 1, margin: 4}} onClick={adjustForKeyboard}>
          This is the content editable region
        </div>

        {/*<div  onClick={adjustForKeyboard}>*/}
        {/*  initialHeight: {initialHeight} = {message}*/}
        {/*</div>*/}

        <button onClick={adjustForKeyboard}>
          adjust
        </button>

        <div style={{padding: 8}} >
          <button onClick={handleButtonClick}><b>B</b></button>
          <button onClick={handleButtonClick}><i>I</i></button>
        </div>
      </div>
    </>
  )
}

export default App
