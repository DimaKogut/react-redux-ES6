import React from 'react'
import { shallow } from 'enzyme';

import { connect } from 'react-redux'
import Layout from '../js/components/Layout';

describe('components', () => {
  console.log();
  it('should call addTodo if length of text is greater than 0', () => {})
})

// function setup() {

//   const enzymeWrapper = shallow(<Header />)

//   return {
//     enzymeWrapper
//   }
// }

describe('components', () => {
  describe('Header', () => {
    it("contains spec with an expectation", function() {
      expect(shallow(<Layout />).contains(<div className="main" />)).toBe(true);
    })
  })
})


// describe('test', () => {
//   beforeEach(() => {
//     jasmineEnzyme();
//   });

// });


// var jasmineEnzyme = require('../../src/js/components/Layout');
// var utils = require('react');

// describe('root', function () {
//   console.log('');
//   it('renders without problems', function () {
//     n = 1;

//     foo = {
//       setBar: function() {
//         console.log('here');
//       }
//     }
//     function n(){
//       console.log('here');
//     }

//     spyOn(foo, 'setBar');
//     foo.setBar()

//     expect(foo.setBar).toHaveBeenCalled();
//   })
// });