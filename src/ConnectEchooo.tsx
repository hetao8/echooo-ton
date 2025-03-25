import React from 'react';

const ConnectEchooo: React.FC = () => {
    const handleConnect = () => {
        const userAgent = navigator.userAgent.toLowerCase();

        // 判断是否是 Android 设备
        if (userAgent.includes('android')) {
            window.open('echooo://echooo.valleysound.xyz/vss/ton-connect', '_blank');
        } 
        
        else if (userAgent.includes('iphone') || userAgent.includes('ipad') || userAgent.includes('ipod')) {
            window.open('https://api.valleysound.xyz/vss', '_blank');
        } 
        // 默认情况
        else {
            window.open('https://api.valleysound.xyz/vss', '_blank');
        }
    };

    return (
        <div>
            <h1>连接 Echooo 钱包</h1>
            <button onClick={handleConnect}>连接到 Echooo</button>
        </div>
    );
};

export default ConnectEchooo;
