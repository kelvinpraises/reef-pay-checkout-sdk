(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){"use strict";const sdkVersion="0.0.1";const url="https://reef-pay.web.app.com/api/checkout-request";function initializeStore(config){return itemId=>{const apiKey=config.apiKey;const checkoutId=config.checkoutId;const checkoutType=config.checkoutType;const buyerId=config.buyerId;postData(url,apiKey,{checkoutType:checkoutType,checkoutId:checkoutId,itemId:itemId,buyerId:buyerId}).then(data=>{console.log(data)})}}async function postData(url,apiKey,data){const response=await fetch(url,{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json","SDK-Version":sdkVersion},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify(data)});return response.json()}},{}]},{},[1]);