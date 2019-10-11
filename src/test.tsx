import BeautyStars from '.';
import React from 'react';
import renderer from 'react-test-renderer';
import { cleanup, fireEvent, render } from '@testing-library/react';

describe('BeautyStars', () => {
  afterEach(cleanup);

  it('render correctly', () => {
    const component = renderer.create(<BeautyStars />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('render correctly 5 stars rating', () => {
    const component = renderer.create(<BeautyStars value={5} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('render correctly color', () => {
    const component = renderer.create(
      <BeautyStars value={4} activeColor="#faf" inactiveColor="#a0a" />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('render correctly size', () => {
    const component = renderer.create(<BeautyStars value={4} size={70} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('render 7 stars', () => {
    const component = renderer.create(<BeautyStars value={3} maxStars={7} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('CheckboxWithLabel changes the value after click', () => {
    let value = 0;
    const { getByTitle } = render(
      <BeautyStars value={value} onChange={newValue => (value = newValue)} />,
    );

    fireEvent.click(getByTitle('4 star'));

    expect(value).toBe(4);
  });

  it('CheckboxWithLabel does not changes the value after click when editable is false', () => {
    let value = 2;
    const { getByTitle } = render(
      <BeautyStars
        value={value}
        onChange={newValue => (value = newValue)}
        editable={false}
      />,
    );

    fireEvent.click(getByTitle('4 star'));

    expect(value).toBe(2);
  });
});
