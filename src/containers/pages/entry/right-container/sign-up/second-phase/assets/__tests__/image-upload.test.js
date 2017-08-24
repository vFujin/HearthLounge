import React from 'react';
import renderer from 'react-test-renderer';
import ImageUpload from "../image-upload";

describe('ImageUpload', ()=>{
  const updateFormProperty = jest.fn();

  test('renders correctly', () =>{
    const tree = renderer.create(
        <ImageUpload updateFormProperty={updateFormProperty}/>
    ).toJSON();
    expect(tree).toMatchSnapshot()
  });

  afterEach(()=>{
    updateFormProperty.mockClear();
  })
});