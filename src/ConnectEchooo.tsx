import React, { useEffect } from 'react';

const ConnectEchooo: React.FC = () => {
    useEffect(() => {
        const userAgent = navigator.userAgent.toLowerCase();
        const queryParams = window.location.search;

        const baseAndroidUrl = 'echooo://echooo.valleysound.xyz/vss/ton-connect';
        const finalAndroidUrl = `${baseAndroidUrl}${queryParams}`;

        const baseIOSUrl = 'https://api.valleysound.xyz/vss';
        const finalIOSUrl = `${baseIOSUrl}${queryParams}`;
        const downloadUrl = 'https://www.echooo.xyz'; // Echooo App 下载地址

        if (userAgent.includes('android')) {
            const startTime = Date.now();

            // 方式1: 直接尝试跳转 App
            window.location.href = finalAndroidUrl;
            // window.open(finalAndroidUrl,'_blank');

            // 方式2: 备用方案 (用 iframe 触发深链)
            // setTimeout(() => {
            //     const iframe = document.createElement('iframe');
            //     iframe.style.display = 'none';
            //     iframe.src = finalAndroidUrl;
            //     document.body.appendChild(iframe);
            // }, 300); // 延迟 300ms 避免过早触发

            // 设定 1.5 秒后检查是否仍然在当前页面
            setTimeout(() => {
                const endTime = Date.now();
                if (endTime - startTime < 1800) {
                    alert('检测到您未安装 Echooo App，将跳转到下载页面');
                    window.location.href = downloadUrl; // 跳转至应用商店
                } else {

                    setTimeout(() => {
                        window.location.href = 'about:blank';
                        window.close();
                    }, 1500);
                }
            }, 1800);
        } else {
            // iOS 设备默认跳转 Web
            window.location.href = finalIOSUrl;
            // window.open(finalIOSUrl,'_blank');

            // 延迟 3 秒后关闭网页
            setTimeout(() => {
                const endTime = Date.now();
                if (endTime - startTime < 1800) {
                    alert('检测到您未安装 Echooo App，将跳转到下载页面');
                    window.location.href = downloadUrl; // 跳转至应用商店
                } else {

                    setTimeout(() => {
                        window.location.href = 'about:blank';
                        window.close();
                    }, 1500);
                }
            }, 1800);
        }
    }, []);

    return null;
};

export default ConnectEchooo;