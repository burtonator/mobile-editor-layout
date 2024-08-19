function App() {

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
