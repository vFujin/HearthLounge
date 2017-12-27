import React from 'react';
import {InputFilter, SliderFilter, IconFilter} from '../../filters';

const Sidebar = ({cards, allCards, info, filters, handleInputChange, handleSliderClick, handleIconClick}) => {
  const toggleFamiliesFilter = () =>{
    if(filters.cardSet === "mean-streets-of-gadgetzan"){
      return <IconFilter header={true}
                         header_label="Family"
                         filter="multiClassGroup"
                         filters={filters}
                         wrapper_class="sidebar-icons"
                         handleIconClick={handleIconClick}/>
    }
  };

  return (
    <div className="sidebar__body">
      <InputFilter data={cards}    filter="name"     type="cards"      filters={filters} multiple={false} handleInputChange={handleInputChange}/>
      <InputFilter data={info}     filter="race"     type="gameInfo"   filters={filters} multiple={true}  handleInputChange={handleInputChange}/>
      <InputFilter data={info}     filter="faction"  type="gameInfo"   filters={filters} multiple={true}  handleInputChange={handleInputChange}/>
      <InputFilter data={info}     filter="type"     type="gameInfo"   filters={filters} multiple={true}  handleInputChange={handleInputChange}/>
      <InputFilter data={allCards} filter="mechanic" type="customInfo" filters={filters} multiple={true}  handleInputChange={handleInputChange}/>

      <SliderFilter filter="health"     filters={filters} handleSliderClick={handleSliderClick} defaultValue={[0, 30]} max={50} marks={{0:0, 30:30, 50:50}}/>
      <SliderFilter filter="attack"     filters={filters} handleSliderClick={handleSliderClick} defaultValue={[0, 5]}  max={30} marks={{0:0, 5:5, 30:30}}/>
      <SliderFilter filter="durability" filters={filters} handleSliderClick={handleSliderClick} defaultValue={[0, 7]}  max={10} marks={{0:0, 7:7, 10:10}}/>

      <IconFilter data={info} header={true} header_label="standard sets" filter="cardSet" filters={filters} wrapper_class="sidebar-icons" mode="standard" handleIconClick={handleIconClick}/>
      {toggleFamiliesFilter()}
      <IconFilter data={info}  header={true} header_label="wild sets" filter="cardSet" filters={filters} wrapper_class="sidebar-icons" mode="wild" handleIconClick={handleIconClick} />
      <IconFilter header={true} header_label="rarity" filter="rarity" filters={filters} wrapper_class="sidebar-icons" handleIconClick={handleIconClick}/>

      {/*<IsGoldenFilter/>*/}
    </div>
  );
};

export default Sidebar;