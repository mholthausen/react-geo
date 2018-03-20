/*eslint-env jest*/

import TestUtil from '../../Util/TestUtil';

import { ZoomOutButton } from '../../index';

describe('<ZoomOutButton />', () => {

  let map;

  beforeEach(() => {
    map = TestUtil.createMap();
  });

  it('is defined', () => {
    expect(ZoomOutButton).not.toBeUndefined();
  });

  it('can be rendered', () => {
    const wrapper = TestUtil.mountComponent(ZoomOutButton);
    expect(wrapper).not.toBeUndefined();
  });

  it('zooms out when clicked', () => {
    const wrapper = TestUtil.mountComponent(ZoomOutButton, {map});

    const initialZoom = map.getView().getZoom();

    wrapper.instance().onClick();

    const newZoom = map.getView().getZoom();

    expect(newZoom).toBe(initialZoom - 1);
  });

});
