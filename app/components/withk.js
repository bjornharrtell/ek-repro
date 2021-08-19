import Component from '@ember/component';
import { computed, set } from '@ember/object';
import { keyResponder, onKey } from 'ember-keyboard'

export default keyResponder(Component.extend({
  argtestmember: computed(function() {
      // NOTE: this.argtest is undefined!
      debugger
      return this.argtest
  }),
}));
