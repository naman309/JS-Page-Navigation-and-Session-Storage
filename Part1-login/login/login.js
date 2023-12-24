"use strict";

const getCookieByName = name => {
    const [key, value] = document.cookie? document.cookie.split(';').map(c => c.trim().split('=')).find(([key]) => key === name) : [];
    return value
};

const setCookie = (name, value, days) => {
    document.cookie = `${name}=${value}`
};

const deleteCookie = name => {
    const expiry = 'expires=Tue, 01 Jan 2019 00:00:00 UTC'
    document.cookie =  `${name}="";${expiry}`;
};

const goToPage = url => {
    window.location.href=url
};