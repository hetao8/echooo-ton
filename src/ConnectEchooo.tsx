import React, { useEffect } from 'react';
import {isAndroid, isIos, isPc} from "@/utils";

const ConnectEchooo: React.FC = () => {
    useEffect(() => {
        const queryParams = window.location.search;
        const baseAndroidUrl = 'echooo://echooo.valleysound.xyz/vss/ton-connect';
        const finalAndroidUrl = `${baseAndroidUrl}${queryParams}`;

        const baseIOSUrl = 'https://api.valleysound.xyz/vss/ton-connect';
        const finalIOSUrl = `${baseIOSUrl}${queryParams}`;
        const downloadUrl = 'https://www.echooo.xyz/'; // Echooo App 下载地址

        if (isAndroid()) {
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
        }
        if (isIos()) {
            // iOS 设备默认跳转 Web
            window.location.href = finalIOSUrl;
        }
        if (isPc()) {
            window.location.href = downloadUrl;
        }
    }, []);

    return null;
};

export default ConnectEchooo;
