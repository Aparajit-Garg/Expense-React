import React, {useState} from 'react';
import {Route, Routes} from 'react-router-dom';
import Login from './components/Login/Login';
import Home from './components/Home/Home'

const App = () => {
    const [loginStatus, setLoginStatus] = useState(false);

    return (
        <React.Fragment>
            <main>
                <Routes>
                    <Route path="/" element={<Login updateLoginStatus={setLoginStatus}/>} exact />
                    <Route path="/home" element={<Home />} />
                    {/* <Route path="/new" element={<NewEntry />} />
                    <Route path="/edit" element={<EditEntry />} />
                    <Route path="/delete" element={<DeleteEntry />} /> */}
                </Routes>
            </main>
        </React.Fragment>
    );
};

export default App;