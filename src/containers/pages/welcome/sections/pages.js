import React from 'react';
import Icon from "../../../../components/icon";
import Tooltip from 'antd/lib/tooltip';
import welcomeInfo from "../../../../globals/welcome";
import Slider from "../../../../components/slider";

const PagesSection = () => {

  const mapPageInfos = (pageInfo) => {

    return pageInfo.sort((a, b) => a.implemented < b.implemented).map((page, i) => (
        <Tooltip key={`pageInfo_${i}`} title={!page.implemented && "Not implemented yet"} placement="bottom">
          <li className={`pageInfo ${page.implemented ? "implemented" : "not-implemented"}`}>
            <span>{page.implemented ? "✓" : "|"}</span>
            <p>{page.text}</p>
          </li>
        </Tooltip>
      )
    )
  };

  const mapPageImgs = (images) => images.map((img, i) => <img src={img} key={`pageImg_${i}`} alt=""/>);

  return welcomeInfo.map(p => (
    <section className="welcomePage" key={p.page} id={p.page}>
      <header>
        <h1>{p.page}</h1>
        <h4>{p.about}</h4>
      </header>
      <div className="section__content">
        <div className="section__content--img">
          {p.img.length > 1 ? <Slider slides={[...mapPageImgs(p.img)]} /> : mapPageImgs(p.img)}
        </div>
        <div className="section__content--details">
          <ul>
            {mapPageInfos(p.info)}
          </ul>
          <Icon name={p.icon}/>
        </div>
      </div>
    </section>
  ));
};

export default PagesSection;
