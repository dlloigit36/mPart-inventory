import React, { useState, useEffect } from "react"
import Header from "./Header"
import Footer from "./Footer"
import Client from "./Client"
import Part from "./Part"
import ButtonShowAll from "./ButtonShowAll"
import SearchFormClient from "./SearchFormClient"
import SearchFormPart from "./SearchFormPart"
import CreateClient from "./CreateClient"
import CreatePart from "./CreatePart"
import fetchClients, {addDbClient} from "../data/db-data.js"


const name = "Machinery"

function App() {
    const [clients, setClients] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // To indicate data fetching status
    const [error, setError] = useState(null); // To store any error during fetching
    const [parts, setParts] = useState([]);

    const [selectedClient, setSelectedClient] = useState({
        id: "",
        name: "",
        description: ""
    })

    useEffect(() => {
        const loadItems = async () => {
        try {
            const data = await fetchClients("*");
            setClients(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
        };

        loadItems();
    }, [addClient]); // Empty dependency array means this effect runs once on mount


    function addClient(newClient) {
        let anotherClient = {
            name: newClient.cName,
            description: newClient.cDesc
        }
        addDbClient(anotherClient);

    }

    function addPart(newPart) {
        setParts(prevPart => {
            return [...prevPart, newPart]
        });
    }

    // function when client div clicked
    function selectClient(clientId, clientName, clientDesc) {
        // id is database table client_detail id
        setSelectedClient({
            id: clientId,
            name: clientName,
            description: clientDesc
        })
    }

    if (isLoading) {
        return <p>Loading items...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
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
                <p>selected client= {selectedClient.name}, id= {selectedClient.id}</p>
                {clients.map((clientItem, index) => {
                    return (
                        <Client 
                            key={index}
                            id={index}
                            clientId={clientItem.id}
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