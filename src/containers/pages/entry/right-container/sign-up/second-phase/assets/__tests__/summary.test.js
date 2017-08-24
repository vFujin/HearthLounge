import React from 'react';
import renderer from 'react-test-renderer';
import Summary from "../summary";

describe('Summary', ()=>{

  test('renders correctly', () =>{
    const tree = renderer.create(
        <Summary/>
    ).toJSON();
    expect(tree).toMatchSnapshot()
  });
});