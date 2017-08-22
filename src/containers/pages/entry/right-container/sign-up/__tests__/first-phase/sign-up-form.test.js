import React from 'react';
import faker from 'faker';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import SignUpForm from '../../first-phase/sign-up-form';

describe('SignUpForm', () =>{
  let wrapper;

  const handleInputChange = jest.fn(),
      handleFormSubmit = jest.fn(),
      handleCheckboxClick = jest.fn(),
      signUp_email = faker.internet.email(),
      signUp_password = faker.internet.password(),
      signUp_confirmEmail = faker.internet.email(),
      signUp_confirmPassword = faker.internet.password(),
      tos = false;

  test('renders correctly', () =>{
    const tree = renderer.create(
        <div>Foo</div>
    ).toJSON();
    expect(tree).toMatchSnapshot()
  });

  beforeEach(()=>{
    wrapper = shallow(
        <SignUpForm handleInputChange={handleInputChange}
                    handleFormSubmit={handleFormSubmit}
                    handleCheckboxClick={handleCheckboxClick}
                    signUp_email={signUp_email}
                    signUp_confirmEmail={signUp_confirmEmail}
                    signUp_password={signUp_password}
                    signUp_confirmPassword={signUp_confirmPassword}
                    tos={tos} />
    )
  });

  const testButton = () => {
    describe(`#handleFormSubmit`, () =>{
      beforeEach(()=>{
        const button = wrapper.find('button').first();
        button.simulate('click');
      });

      test('should call handleFormSubmit once', () => {
        expect(handleFormSubmit.mock.calls.length).toEqual(1);
      });
    });
  };

  const testCheckbox = () => {
    beforeEach(() => {
      wrapper.setProps({
        tos: true
      })
    });

    test('should check the "I agree to the Terms of Service" checkbox', () =>{
      const checkbox = wrapper.find('#tos');
      expect(checkbox).toBeTruthy();
    })
  };

  testButton();
  testCheckbox();

  afterEach(()=>{
    handleInputChange.mockClear();
    handleFormSubmit.mockClear();
    handleCheckboxClick.mockClear();
  })
});