import React from 'react';
import faker from 'faker';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Button from "../button";

describe('Button', () =>{
  const handleClick = jest.fn(),
        buttonText = faker.lorem.word();
  let wrapper;

  test('renders correctly', () =>{
    const tree = renderer.create(
        <div>Foo</div>
    ).toJSON();
    expect(tree).toMatchSnapshot()
  });

  beforeEach(()=>{
    wrapper = shallow(
        <Button text={buttonText} handleClick={handleClick}/>
    )
  });

  const testButton = () => {
    describe(`#handleClick`, () =>{
      beforeEach(()=>{
        const button = wrapper.find('button').first();
        button.simulate('click');
      });

      test('should call handleButtonClick once', () => {
        expect(handleClick.mock.calls.length).toEqual(1);
      });
    });
  };

  testButton();

  afterEach(()=>{
    handleClick.mockClear();
  })
});