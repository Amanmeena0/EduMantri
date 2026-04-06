import  {LandingPage, Dashboard, Workspace} from "./Component/index.js"


function App() {

  return (
    <>
      <div className="bg-black h-screen w-screen text-amber-400"> 
        
        <Workspace/>
        <Dashboard/>
        <LandingPage />
        <p>Hi bitch</p>
      </div>
    </>
  )
}

export default App
