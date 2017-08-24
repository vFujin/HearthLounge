import React from 'react';
import {usernameStatus} from "../index";

describe('usernameStatus()', () =>{
  test('should return null if username input is empty', () =>{
    expect(usernameStatus('')).toEqual(null);
  });

  test('should return null if username is below 3 characters', ()=>{
    expect(usernameStatus('fo')).toEqual(null);
  });

  test('should return null if username is above 10 characters', ()=>{
    expect(usernameStatus('foooooooooo')).toEqual(null);
  });

  test('should return "x" if username is taken', () =>{
    expect(usernameStatus('Joe', true)).toEqual(<span>x</span>);
  });

  test('should return "✓" if username is not taken', () =>{
    expect(usernameStatus('Joe', false)).toEqual(<span>✓</span>);
  })
});