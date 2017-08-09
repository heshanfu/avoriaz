import { compileToFunctions } from 'vue-template-compiler';
import mount from '../../../../src/mount';

describe('hasAttribute', () => {
  it('returns true if wrapper contains attribute with value', () => {
    const attribute = 'attribute';
    const value = 'value';
    const compiled = compileToFunctions(`<div ${attribute}=${value}></div>`);
    const wrapper = mount(compiled);
    expect(wrapper.hasAttribute(attribute)).to.equal(true);
  });

  it('returns true if wrapper contains attribute without value', () => {
    const attribute = 'attribute';
    const compiled = compileToFunctions(`<div ${attribute}></div>`);
    const wrapper = mount(compiled);
    expect(wrapper.hasAttribute(attribute)).to.equal(true);
  });

  it('returns false if wrapper does not contain attribute', () => {
    const compiled = compileToFunctions('<div />');
    const wrapper = mount(compiled);
    expect(wrapper.hasAttribute('attribute')).to.equal(false);
  });

  it('throws an error if attribute is not a string', () => {
    const compiled = compileToFunctions('<div />');
    const wrapper = mount(compiled);
    const message = 'wrapper.hasAttribute() must be passed a string';
    expect(() => wrapper.hasAttribute(undefined)).to.throw(Error, message);
  });
});
