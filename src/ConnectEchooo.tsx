import React, { useEffect } from 'react';

const ConnectEchooo: React.FC = () => {
    useEffect(() => {
        const userAgent = navigator.userAgent.toLowerCase();
        const queryParams = window.location.search;

        const baseAndroidUrl = 'echooo://echooo.valleysound.xyz/vss/ton-connect';
        const finalAndroidUrl = `${baseAndroidUrl}${queryParams}`;

        const baseIOSUrl = 'https://api.valleysound.xyz/vss/*';
        const finalIOSUrl = `${baseIOSUrl}${queryParams}`;
        const downloadUrl = 'https://www.echooo.xyz/'; // Echooo App 下载地址

        if (userAgent.includes('android')) {
            const startTime = Date.now();
            window.location.href = finalAndroidUrl;
 
            setTimeout(() => {
                const endTime = Date.now();
                if (endTime - startTime > 1200) {
                    alert('检测到您未安装 Echooo App，将跳转到官方页面');
                    window.location.href = downloadUrl; 
                } else {

                    setTimeout(() => {
                        window.location.href = 'about:blank';
                        window.close();
                    }, 1200);
                }
            }, 1200);
        } else {
            // iOS 设备默认跳转 Web
            const startTime = Date.now();
            window.location.href = finalIOSUrl;

            // 延迟 3 秒后关闭网页
            setTimeout(() => {
                const endTime = Date.now();
                if (endTime - startTime < 1200) {
                    alert('检测到您未安装 Echooo App，将跳转到官方页面');
                    window.location.href = downloadUrl; 
                } else {

                    setTimeout(() => {
                        window.location.href = 'about:blank';
                        window.close();
                    }, 1200);
                }
            }, 1200);
        }
    }, []);

    return null;
};

export default ConnectEchooo;