import Vue from 'vue';
import Home from '@/components/Home';

describe('Home.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Home);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('h1').textContent)
      .toEqual('GitAssist');
    expect(vm.$el.querySelector('h2').textContent)
      .toEqual('Your digital assistant for managing your software projects');
  });
});
