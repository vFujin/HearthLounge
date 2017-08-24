import React from 'react';
import renderer from 'react-test-renderer';
import faker from 'faker';
import SignUpUpdateProfile from "../sign-up-update-profile";

describe('SignUpUpdateProfile', () =>{
  const RNG = () => Math.floor(Math.random() * 10);

  const updateFormProperty = jest.fn(),
        signUp_firstStep = RNG() < 5 ? 'success' : 'failure',
        signUp_secondStep = RNG() < 5 ? 'success' : 'failure',
        signUp_username = faker.internet.userName();

  test('renders correctly', () =>{
    const tree = renderer.create(
        <SignUpUpdateProfile signUp_firstStep={signUp_firstStep}
                             signUp_username={signUp_username}
                             updateFormProperty={updateFormProperty}
                             signUp_secondStep={signUp_secondStep} />
    ).toJSON();
    expect(tree).toMatchSnapshot()
  });

  afterEach(()=>{
    updateFormProperty.mockClear();
  })
});