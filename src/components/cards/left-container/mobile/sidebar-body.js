import React from 'react';
import {InputFilter, SliderFilter, IconFilter} from '../../filters';

const SidebarBody = ({cards, mode, allCards, info, filters, inExtensions, inDeckCreation, handleFilterReset, handleInputChange, handleSliderClick, handleIconClick}) => {
  const toggleFamiliesFilter = () =>{
    if(filters.cardSet === "mean-streets-of-gadgetzan"){
      return <IconFilter header_label="Family"
                         filter="multiClassGroup"
                         filters={filters}
                         wrapper_class="sidebar-icons"
                         handleIconClick={handleIconClick}/>
    }
  };

  return (
    <div className="sidebar__body">
      <IconFilter header_label="cost"        filter="cost"        filters={filters} wrapper_class="sidebar-icons" handleIconClick={handleIconClick} handleFilterReset={handleFilterReset} tooltip={false}/>
      <IconFilter header_label="playerClass" filter="playerClass" filters={filters} wrapper_class="sidebar-icons" handleIconClick={handleIconClick} handleFilterReset={handleFilterReset} inDeckCreation={inDeckCreation}/>
      <IconFilter header_label="rarity"      filter="rarity"      filters={filters} wrapper_class="sidebar-icons" handleIconClick={handleIconClick} handleFilterReset={handleFilterReset}/>

      <InputFilter data={cards}    filter="name"     type="cards"      filters={filters} handleInputChange={handleInputChange} handleFilterReset={handleFilterReset} multiple={false} />
      <InputFilter data={info}     filter="race"     type="gameInfo"   filters={filters} handleInputChange={handleInputChange} handleFilterReset={handleFilterReset}/>
      <InputFilter data={info}     filter="faction"  type="gameInfo"   filters={filters} handleInputChange={handleInputChange} handleFilterReset={handleFilterReset}/>
      <InputFilter data={info}     filter="type"     type="gameInfo"   filters={filters} handleInputChange={handleInputChange} handleFilterReset={handleFilterReset}/>
      <InputFilter data={allCards} filter="mechanic" type="gameInfo"   filters={filters} handleInputChange={handleInputChange} handleFilterReset={handleFilterReset}/>

      <SliderFilter filter="health"     filters={filters} handleSliderClick={handleSliderClick} defaultValue={[0, 30]} max={50} marks={{0:0, 30:30, 50:50}} handleFilterReset={handleFilterReset}/>
      <SliderFilter filter="attack"     filters={filters} handleSliderClick={handleSliderClick} defaultValue={[0, 5]}  max={30} marks={{0:0, 5:5, 30:30}}   handleFilterReset={handleFilterReset}/>
      <SliderFilter filter="durability" filters={filters} handleSliderClick={handleSliderClick} defaultValue={[0, 7]}  max={10} marks={{0:0, 7:7, 10:10}}   handleFilterReset={handleFilterReset}/>
      <IconFilter data={info} header_label="standard sets" filter="cardSet" filters={filters} wrapper_class="sidebar-icons" mode="standard" handleIconClick={handleIconClick} handleFilterReset={handleFilterReset}/>
      {mode !== "standard" && <IconFilter data={info} header_label="wild sets" filter="cardSet" filters={filters}
                                          wrapper_class="sidebar-icons" mode="wild" handleIconClick={handleIconClick}
                                          handleFilterReset={handleFilterReset}/>
      }
      {toggleFamiliesFilter()}


      {/*<IsGoldenFilter/>*/}
    </div>
  );
};

export default SidebarBody;