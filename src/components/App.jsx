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
import dbClients from "../db-data.js"


const name = "Machinery"


function App() {
    const [clients, setClients] = useState(dbClients);
    const [parts, setParts] = useState([])

    const [selectedClient, setSelectedClient] = useState("") 

    function addClient(newClient) {
        let anotherClient = {
            key: clients.length + 1,
            name: newClient.cName,
            description: newClient.cDesc
        } 
        setClients(prevClient => {
            return [...prevClient, anotherClient]
        });
    }

    function addPart(newPart) {
        setParts(prevPart => {
            return [...prevPart, newPart]
        });
    }

    // function when client div clicked
    function selectClient(clientName, clientIndex) {
        // parts display only for selected client name, input = client id
        setSelectedClient(clientIndex)
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
                <p>selected client index= {selectedClient}</p>
                {clients.map((clientItem, index) => {
                    return (
                        <Client 
                            key={index}
                            id={index}
                            clientName={clientItem.name}
                            clientDesc={clientItem.description}
                            onSelected={selectClient}
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