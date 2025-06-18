import React, { useEffect } from 'react';

const ConnectEchooo: React.FC = () => {
    useEffect(() => {
        const userAgent = navigator.userAgent.toLowerCase();
        const queryParams = window.location.search || '';

        const baseAndroidUrl = 'echooo://echooo.valleysound.xyz/vss/ton-connect';
        const finalAndroidUrl = `${baseAndroidUrl}${queryParams}`;

        const baseIOSUrl = 'https://api.valleysound.xyz/vss';
        const finalIOSUrl = `${baseIOSUrl}${queryParams}`;

        const downloadUrl = 'https://www.echooo.xyz'; // Echooo App 下载地址
        const isAndroid = userAgent.includes('android');
        // const appUrl = isAndroid ? finalAndroidUrl : finalIOSUrl;
        const appUrl = 'https://www.baidu.com';
        // alert('检测到');

        // 记录页面是否进入后台（用于辅助判断跳转成功）
        let hiddenTimer: NodeJS.Timeout;
        const handleVisibilityChange = () => {
            if (document.visibilityState === 'hidden') {
                // 用户跳转 App 成功，关闭页面
                clearTimeout(hiddenTimer);
                hiddenTimer = setTimeout(() => {
                    window.location.href = 'about:blank';
                    window.close();
                }, 1500);
            }
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);

        // 调起 App（或 iOS Web 网页）
        const startTime = Date.now();
        window.location.href = appUrl;

        // 设置 2 秒后检查是否仍在当前页面
        const fallbackTimer = setTimeout(() => {
            const endTime = Date.now();
            if (document.visibilityState === 'visible' && endTime - startTime < 2000) {
                alert('检测到您未安装 Echooo App，将跳转到下载页面');
                window.location.href = downloadUrl;
            }
        }, 2000);

        return () => {
            clearTimeout(fallbackTimer);
            clearTimeout(hiddenTimer);
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, []);

    return null;
};

export default ConnectEchooo;