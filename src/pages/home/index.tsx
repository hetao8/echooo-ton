import  { useState } from 'react';
import ConnectEchooo from '../../ConnectEchooo';

const Home = () => {
    const [showConnect, setShowConnect] = useState(false);

    const handleShowConnect = () => {
        setShowConnect(true);
    };

    return (
        <div>
            <button onClick={handleShowConnect}>连接echooo钱包</button>
            {showConnect && <ConnectEchooo />}
        </div>
    );
};

export default Home;
