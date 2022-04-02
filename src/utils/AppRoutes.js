import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Cadastro from "../pages/Cadastro";
import Habits from "../pages/Habits";
import History from "../pages/History";
import Home from "../pages/Home";
import ToDay from "../pages/ToDay";
import UserContext from "./use-contexts/UserContext";

function AppRoutes(){
    const [token, setToken] = useState('');
    const [completedTasks, setCompletedTasks] = useState(0);
    const [numTasks, setNumTasks] = useState(0);
    return(
        <UserContext.Provider value={{token, completedTasks, numTasks, setToken, setCompletedTasks, setNumTasks}}>
            <BrowserRouter>
                <Routes>
                    <Route exact path='/' element={<Home />}></Route>
                    <Route path='/cadastro' element={<Cadastro />}></Route>
                    <Route path='/habitos' element={<Habits />}></Route>
                    <Route path='/hoje' element={<ToDay />}></Route>
                    <Route path='/historico' element={<History />}></Route>
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
}

export default AppRoutes;