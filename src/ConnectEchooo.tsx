import React, { useEffect, useRef } from 'react';

const ConnectEchooo: React.FC = () => {
    const hasExecuted = useRef(false);

    useEffect(() => {
        if (hasExecuted.current) return; // 避免重复执行
        hasExecuted.current = true;

        const userAgent = navigator.userAgent.toLowerCase();
        const queryParams = window.location.search;

        const baseAndroidUrl = 'echooo://echooo.valleysound.xyz/vss/ton-connect';
        const finalAndroidUrl = `${baseAndroidUrl}${queryParams}`;

        const baseIOSUrl = 'https://api.valleysound.xyz/vss/';
        const finalIOSUrl = `${baseIOSUrl}${queryParams}`;
        const downloadUrl = 'https://play.google.com/store/apps/details?id=com.echooo.app'; // Echooo App 下载地址

        if (userAgent.includes('android')) {
            const startTime = Date.now();
            
            setTimeout(() => {
                const fakeClick = new MouseEvent('click', {
                    bubbles: true,
                    cancelable: true,
                    view: window
                });
                document.dispatchEvent(fakeClick);
        
                // 延迟跳转
                setTimeout(() => {
                    window.location.href = finalAndroidUrl; 
                }, 300);
            }, 1000); // 初始延迟
        
        
            setTimeout(() => {
                const endTime = Date.now();
                if (endTime - startTime < 1800) {
                    alert('检测到您未安装 Echooo App，将跳转到下载页面');
                    window.location.href = downloadUrl; // 跳转至应用商店
                }
            }, 1800);
        } else {
            // iOS 设备默认跳转 Web
            const startTime = Date.now();
            setTimeout(() => {
                const fakeClick = new MouseEvent('click', {
                    bubbles: true,
                    cancelable: true,
                    view: window
                });
                document.dispatchEvent(fakeClick);
        
                // 延迟跳转
                setTimeout(() => {
                    window.location.href = finalIOSUrl; 
                }, 300);
            }, 1000); // 初始延迟

            setTimeout(() => {
                const endTime = Date.now();
                if (endTime - startTime < 1800) {
                    alert('检测到您未安装 Echooo App，将跳转到下载页面');
                    window.location.href = downloadUrl; // 跳转至应用商店
                } 
            }, 1800);
            
        }
    }, []);

    return null;
};

export default ConnectEchooo;