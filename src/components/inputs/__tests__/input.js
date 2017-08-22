import React from 'react';
import faker from 'faker';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Input from '../input';

describe('Input', () =>{
  let wrapper;

  const handleInputChange = jest.fn(),
        id = faker.lorem.word(),
        placeholder = faker.lorem.word(),
        value = faker.lorem.sentence();

  test('renders correctly', () =>{
    const tree = renderer.create(
        <div>Foo</div>
    ).toJSON();
    expect(tree).toMatchSnapshot()
  });

  beforeEach(()=>{
    wrapper = shallow(
        <Input id={id}
               placeholder={placeholder}
               value={value}
               handleInputChange={handleInputChange} />
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
        const input = wrapper.find(`#${selector}`),
            inputValue = input.node.props.value;
        expect(inputValue).toBe(expectedValue);
      });
    });
  };

  testInputChange(id, value);

  afterEach(()=>{
    handleInputChange.mockClear();
  })
});