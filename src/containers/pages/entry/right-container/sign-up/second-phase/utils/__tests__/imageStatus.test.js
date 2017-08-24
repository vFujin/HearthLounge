import React from 'react';
import faker from 'faker';
import imageStatus from "../imageStatus";
import ImageUpload from "../../assets/image-upload";

describe('imageStatus()', ()=>{
  const updateFormProperty = jest.fn(),
        activeUser = { username: faker.internet.userName()};

  test('signUp_avatar success', () =>{
    let expectedValue = imageStatus(activeUser, true, updateFormProperty);
    expect(expectedValue).toEqual("✓ Image successfully uploaded.");
  });

  test('signUp_avatar fail', () =>{
    let expectedValue = imageStatus(activeUser, false, updateFormProperty);
    expect(expectedValue).toEqual(<ImageUpload activeUser={activeUser}
                                               updateFormProperty={updateFormProperty}/>);
  });

  afterEach(()=>{
    updateFormProperty.mockClear();
  })
});