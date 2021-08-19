import Component from '@ember/component';
import { computed, set } from '@ember/object';

export default Component.extend({
  argtestmember: computed(function() {
      return this.argtest
  }),
});
