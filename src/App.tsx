import {useCallback, useEffect} from "react";

function App() {


  const adjustForKeyboard = useCallback(() => {
    const height = window.innerHeight;
    document.body.style.minHeight = `${height}px`;
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

        <div contentEditable={true} style={{flexGrow: 1, margin: 4}}>
          This is the content editable region
        </div>

        <div style={{padding: 8}}>
          <button><b>B</b></button>
          <button><i>I</i></button>
        </div>
      </div>
    </>
  )
}

export default App
