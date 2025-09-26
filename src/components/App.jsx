import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import Client from "./Client"
import Part from "./Part"
import ButtonShowAll from "./ButtonShowAll"
import SearchForm from "./SearchForm"

const name = "client name"


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
                <SearchForm 
                    text4placeholder="Enter client name to search...."
                    name="clientName"
                />
                <Client />
                <Client />
                <Client />
                
            </div>
            <div className="part-panel">
                <ButtonShowAll 
                    type="part"
                />
                <SearchForm 
                    text4placeholder="Enter parts name to search...."
                    name="partName"
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