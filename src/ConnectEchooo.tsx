import React from 'react';

const ConnectEchooo: React.FC = () => {
    const handleConnect = () => {
        const userAgent = navigator.userAgent.toLowerCase();
        const queryParams = window.location.search;
        
        const baseAndroidUrl = 'echooo://echooo.valleysound.xyz/vss/ton-connect';
        const finalAndroidUrl = `${baseAndroidUrl}${queryParams}`;

        const baseIOSUrl = 'https://api.valleysound.xyz/vss';
        const finalIOSUrl = `${baseIOSUrl}${queryParams}`;


        if (userAgent.includes('android')) {
            // 直接跳转到 App Scheme
            window.location.href = finalAndroidUrl;
        } else {
            // 其他设备默认跳转 Web
            window.location.href = finalIOSUrl;
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