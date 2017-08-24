import React from 'react';
import faker from 'faker';
import renderer from 'react-test-renderer';
import UpdateProfileForm from "../update-profile-form";

describe('UpdateProfileForm', ()=>{

  const signUp_username = faker.internet.userName(),
        updateFormProperty = jest.fn();
  test('renders correctly', () =>{
    const tree = renderer.create(
        <UpdateProfileForm signUp_username={signUp_username}
                           updateFormProperty={updateFormProperty} />
    ).toJSON();
    expect(tree).toMatchSnapshot()
  });

  afterEach(()=>{
    signUp_username.mockClear();
    updateFormProperty.mockClear();
  })
});