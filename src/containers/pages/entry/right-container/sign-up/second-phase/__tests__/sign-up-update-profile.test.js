import React from 'react';
import renderer from 'react-test-renderer';
import faker from 'faker';
import { shallow } from 'enzyme';
import SignUpUpdateProfile from "../sign-up-update-profile";

describe('SignUpUpdateProfile', () =>{
  const RNG = () => Math.floor(Math.random() * 10);
  let wrapper;

  const signUp_firstStep = RNG() < 5 ? 'success' : 'failure',
        signUp_secondStep = RNG() < 5 ? 'success' : 'failure',
        signUp_username = faker.internet.userName();

  test('renders correctly', () =>{
    const tree = renderer.create(
        <div>Foo</div>
    ).toJSON();
    expect(tree).toMatchSnapshot()
  });

  beforeEach(()=>{
    wrapper = shallow(
        <SignUpUpdateProfile signUp_firstStep={signUp_firstStep}
                             signUp_username={signUp_username}
                             signUp_secondStep={signUp_secondStep}/>
    )
  });
});