import React from 'react';
import faker from 'faker';
import { shallow } from 'enzyme';
import SignIn from '../sign-in';
import renderer from 'react-test-renderer';

describe('SignIn', () =>{
  let wrapper;

  const handleInputChange = jest.fn(),
        handleSignIn = jest.fn(),
        signIn_email = faker.internet.email(),
        signIn_password = faker.internet.password();

  test('renders correctly', () =>{
    const tree = renderer.create(
        <div>Foo</div>
    ).toJSON();

    expect(tree).toMatchSnapshot()
  });

  beforeEach(()=>{
    wrapper = shallow(
        <SignIn handleInputChange={handleInputChange}
                handleSignIn={handleSignIn}
                signIn_email={signIn_email}
                signIn_password={signIn_password} />
    )
  });

  const testInputChange = (selector, expectedValue) => {
    describe(`#handleInputChange on ${selector} input`, ()=>{
      beforeEach(()=>{
        const input = wrapper.find(`#${selector}`);

        input.simulate('change', {
          target: expectedValue
        })
      });

      test('should call handleInputChange once', () => {
        expect(handleInputChange.mock.calls.length).toEqual(1);
      });

      test('should call the handleInputChange with the right value', () =>{
        expect(handleInputChange.mock.calls[0][0].target).toEqual(expectedValue);
      });

      test(`should initialize text input to the ${selector} value`, () =>{
        const input = wrapper.find(`#${selector}`);
        const inputValue = input.node.props.value;
        expect(inputValue).toBe(expectedValue);
      });
    });
  };

  const testButton = (selector) => {
    describe(`#handleSignIn`, () =>{
      beforeEach(()=>{
        const button = wrapper.find('button').first();

        button.simulate('click');
      });

      test('should call handleSignIn once', () => {
        expect(selector.mock.calls.length).toEqual(1);
      });
    });
  };

  testInputChange('signIn_email', signIn_email);
  testInputChange('signIn_password', signIn_password);
  testButton(handleSignIn);

  afterEach(()=>{
    handleInputChange.mockClear();
  })
});