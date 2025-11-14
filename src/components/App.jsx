import React, { useState, useEffect } from "react"
import Header from "./Header"
import Footer from "./Footer"
import Client from "./Client"
import Part from "./Part"
import SearchFormPart from "./SearchFormPart"
import CreateClient from "./CreateClient"
import CreatePart from "./CreatePart"
import fetchClients, {addDbClient} from "../data/db-data.js"
import SearchClientBox from "./SearchClientBox.jsx"


const name = "Machinery"

function App() {
    const [clients, setClients] = useState([]); //db search all clients on reload or refresh
    const [isLoading, setIsLoading] = useState(true); // To indicate data fetching status
    const [error, setError] = useState(""); // To store any error during fetching
    const [parts, setParts] = useState([]);
    const [filteredClient, setFilteredClient] = useState([]);

    const [clickedClient, setClickedClient] = useState({
        id: "",
        name: "",
        description: ""
    });

    async function loadData(keyWord) {
        try {
            const data = await fetchClients(keyWord);
            setClients(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        };
        
    }


    useEffect(() => {
        //load client list from database
        loadData("*")
    }, [addClient]); // Empty dependency array means this effect runs once on mount


    function addClient(newClient) {
        let anotherClient = {
            name: newClient.cName,
            description: newClient.cDesc
        }
        const resp = addDbClient(anotherClient);
        console.log(`error add new client: ${resp}`)

    }

    function addPart(newPart) {
        setParts(prevPart => {
            return [...prevPart, newPart]
        });
    }

    // function when client div clicked
    function selectClient(clientId, clientName, clientDesc) {
        // id is database table client_detail id
        setClickedClient({
            id: clientId,
            name: clientName,
            description: clientDesc
        })
    }

    // function search client term return client name
    function onSearchClientName(client) {
        const filtered = clients.filter((item) => {
            return item.name === client.name
        });
        setFilteredClient(filtered);
    }

    function resetFilter() {
        setFilteredClient([]);
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
                <SearchClientBox 
                    dbClients={clients}
                    onReturnClientName={onSearchClientName}
                    onResetFilteredClient={resetFilter}
                />
                <CreateClient 
                    onAddClient={addClient}
                />
                <p>clicked client= {clickedClient.name}, id= {clickedClient.id}</p>
                {filteredClient.length === 0 ? clients.map((clientItem, index) => {
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
                }) : filteredClient.map((clientItem, index) => {
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
                
            </div>
            <div className="part-panel">
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
                    client= {clickedClient}
                />
                
            </div>
            <div className="bottom-panel">
                <Footer />

            </div>
        </div>

    );
    
}

export default App;