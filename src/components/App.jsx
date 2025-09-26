import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import Client from "./Client"
import Part from "./Part"
import "./styles.css"

const name = ""

function App(params) {
    return (
        <div>
            <Header 
                name= {name}
            />
            <div className="client-panel">
                <Client />
                <Client />
                <Client />
                <Client />
                <Client />
                <Client />
            </div>
            <div className="part-panel">
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
                <Part />
            </div>
            <Footer />
        </div>

    );
    
}

export default App;