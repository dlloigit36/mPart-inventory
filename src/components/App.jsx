import React, { useState } from "react"
import Header from "./Header"
import Footer from "./Footer"
import Client from "./Client"
import Part from "./Part"
import ButtonShowAll from "./ButtonShowAll"
import SearchFormClient from "./SearchFormClient"
import SearchFormPart from "./SearchFormPart"
import CreateClient from "./CreateClient"
import CreatePart from "./CreatePart"

const name = "Machinery"
const selectedClient = "Toyota Corparation"


function App() {
    const [clients, setClients] = useState([]);
    const [parts, setParts] = useState([])

    function addClient(newClient) {
        setClients(prevClient => {
            return [...prevClient, newClient]
        });
    }

    function addPart(newPart) {
        setParts(prevPart => {
            return [...prevPart, newPart]
        });
    }

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
                {clients.map((clientItem, index) => {
                    return (
                        <Client 
                            key={index}
                            id={index}
                            clientName={clientItem.cName}
                            clientDesc={clientItem.cDesc}
                        />
                    );
                })}
                <CreateClient onAddClient={addClient}/>
                
                
                
            </div>
            <div className="part-panel">
                <ButtonShowAll 
                    type="part"
                />
                <SearchFormPart 
                />
                {parts.map((partItem, index) => {
                    return (
                        <Part 
                            key={index}
                            id={index}
                            clientName={partItem.clientName}
                            partName={partItem.pName}
                            partNumber={partItem.pNumber}
                            partId={partItem.pId}
                            partUri={partItem.pUri}
                        />
                    )
                })}
                <CreatePart 
                    onAddPart={addPart}
                    client= {selectedClient}
                />
                
            </div>
            <div className="bottom-panel">
                <Footer />

            </div>
        </div>

    );
    
}

export default App;