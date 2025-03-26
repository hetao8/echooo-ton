import React from 'react';

const ConnectEchooo: React.FC = () => {
    const handleConnect = () => {
        const userAgent = navigator.userAgent.toLowerCase();
        const queryParams = window.location.search;
        
        const baseAndroidUrl = 'echooo://echooo.valleysound.xyz/vss/ton-connect';
        const finalAndroidUrl = `${baseAndroidUrl}${queryParams}`;

        console.log("finalAndroidUrl,",finalAndroidUrl)
        const baseIOSUrl = 'https://api.valleysound.xyz/vss';
        const finalIOSUrl = `${baseIOSUrl}${queryParams}`;
        const downloadUrl = 'https://play.google.com/store/apps/details?id=com.echooo.app'; // Echooo App 下载地址

        if (userAgent.includes('android')) {
            //
            const startTime = Date.now();

            // 尝试打开 App
            const iframe = document.createElement('iframe');
            iframe.style.display = 'none';
            iframe.src = finalAndroidUrl;
            console.log("iframe.src:  ", iframe.src)
            document.body.appendChild(iframe);

            // 设定 2 秒后检查是否仍然在当前页面
            setTimeout(() => {
                const endTime = Date.now();
                if (endTime - startTime < 2000) {
                    alert('检测到您未安装 Echooo App，将跳转到下载页面');
                    window.location.href = downloadUrl; // 跳转至应用商店
                }
            }, 1500);
        } else {
            // iOS 和其他设备默认跳转 Web
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
