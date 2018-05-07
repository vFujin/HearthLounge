import React from 'react';
export const createMarkup = (obj) =>{
  if(obj) {
    let html = obj;
    html = html.replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&amp;#39;/g, "'")
        .replace(/&amp;/g, "&")
        .replace('<!-- SC_OFF -->', '')
        .replace('<!-- SC_ON -->', '')
        .replace('[[', '<span class="card" style="font-weight: bold;">')
        .replace(']]', '</span>')
        .replace('class="md"', '');
    return {__html: html};
  }
};

export const iframe = (src)=> {
  const height= 500, width= 500;
  return <iframe height={height} width={width} title="some clip" src={src}/>
};

