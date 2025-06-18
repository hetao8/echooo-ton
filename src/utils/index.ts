export const isAndroid = () => {
    const u = window.navigator.userAgent;
    return u.indexOf('Android') > -1 || u.indexOf('Linux') > -1;
}

export const isIos = () => {
    const u = window.navigator.userAgent;
    return !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
}

export const isPc = () => {
    const ua = window.navigator.userAgent;
    const Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
    let flag = true;
    for (let v = 0; v < Agents.length; v++) {
        if (ua.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}
