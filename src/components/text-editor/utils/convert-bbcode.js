import React from 'react';

export const convertBBCode = (text = "") => {
  if(typeof text !== undefined || text !==null) {
    let s = text.replace(/</g, '<')
        .replace(/>/g, '>')
        .replace(/;/g, ';')
        //affix
        .replace(/\[b]/g, '<b>')
        .replace(/\[i]/g, '<i>')
        .replace(/\[u]/g, '<u>')
        .replace(/\[s]/g, '<del>')
        .replace(/\[url]/g, '<a href="">')
        .replace(/\[q]/g, '<q>')
        .replace(/\[em]/g, '<iframe src="">')
        .replace(/\[ul]/g, '<ul><li>')
        .replace(/\[ol]/g, '<ol><li>')
        .replace(/\[li]/g, '<li>')
        //suffix
        .replace(/\[\/b]/g, '</b>')
        .replace(/\[\/i]/g, '</i>')
        .replace(/\[\/u]/g, '</u>')
        .replace(/\[\/s]/g, '</del>')
        .replace(/\[\/url]/g, '</a>')
        .replace(/\[\/q]/g, '</q>')
        .replace(/\[\/em]/g, '</iframe>')
        .replace(/\[\/ul]/g, '</li></ul>')
        .replace(/\[\/ol]/g, '</li></ol>')
        .replace(/\[\/li]/g, '</li>');

    function createMarkup(){
      return {__html: s}
    }
    return <div className="markup" dangerouslySetInnerHTML={createMarkup()} />
  }
  return null;
};