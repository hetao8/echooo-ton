import React from 'react';

const ConnectEchooo: React.FC = () => {
    const handleConnect = () => {
        const userAgent = navigator.userAgent.toLowerCase();

        const queryParams = window.location.search; 
        const baseAndroidUrl = 'echooo://echooo.valleysound.xyz/vss/ton-connect';
        const finalAndroidUrl = `${baseAndroidUrl}${queryParams}`; 

        const baseIOSUrl = 'https://api.valleysound.xyz/vss';
        const finalIOSUrl = `${baseIOSUrl}${queryParams}`; // 拼接参数
        // 判断是否是 Android 设备
        if (userAgent.includes('android')) {
            window.open(finalAndroidUrl, '_blank');
        } 
        
        else if (userAgent.includes('iphone') || userAgent.includes('ipad') || userAgent.includes('ipod')) {
            window.open(finalIOSUrl, '_blank');
        } 
        // 默认情况
        else {
            window.open(finalIOSUrl, '_blank');
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