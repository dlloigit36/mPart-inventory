import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import Client from "./Client"
import Part from "./Part"
import ButtonShowAll from "./ButtonShowAll"
import SearchFormClient from "./SearchFormClient"
import SearchFormPart from "./SearchFormPart"

const name = "Machinery"


function App() {
    return (
        <div>
            <Header 
                name= {name}
            />
            <div className="client-panel">
                <ButtonShowAll 
                    type="client"
                />
                <SearchFormClient 
                />
                <Client />
                <Client />
                <Client />
                
            </div>
            <div className="part-panel">
                <ButtonShowAll 
                    type="part"
                />
                <SearchFormPart 
                />
                <Part />
                <Part />
                <Part />
                <Part />
                <Part />
                <Part />
                <Part />
                <Part />
                <Part />
                <Part />
                <Part />
                
            </div>
            <div className="bottom-panel">
                <Footer />

            </div>
        </div>

    );
    
}

export default App;