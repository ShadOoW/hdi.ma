import { observable, action } from 'mobx';

class FilterService {
  @observable isOpen = false;

  constructor(initialData = { isOpen: false }) {
    if (initialData) {
      this.isOpen = initialData.isOpen;
    }
  }

  @action toggle() {
    this.isOpen = !this.isOpen;
  }

  @action close() {
    this.isOpen = false;
  }

  data() {
    return {
      isOpen: this.isOpen,
    };
  }
}

export default FilterService;
