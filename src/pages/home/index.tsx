import { useState } from 'react';
import ConnectEchooo from '../../ConnectEchooo';

const Home = () => {
    const [showConnector, setShowConnector] = useState(false);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
            <button
                onClick={() => setShowConnector(true)}
                style={{
                    padding: '10px 20px',
                    fontSize: '16px',
                    backgroundColor: '#007bff',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
                }}
            >
                连接 Echooo
            </button>

            {showConnector && <ConnectEchooo />}
        </div>
    );
};

export default Home;