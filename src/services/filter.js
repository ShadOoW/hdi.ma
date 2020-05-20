import { observable, action, computed } from 'mobx';

class FilterService {
  @observable response = [];

  @observable isLoaded = false;

  @observable hasError = false;

  @observable isOpen = false;

  @observable filteredChannels = [];

  constructor(initialData = { isOpen: false, response: [], isLoaded: false, hasError: false, filteredChannels: [] }) {
    if (initialData) {
      this.response = initialData.response;
      this.isLoaded = initialData.isLoaded;
      this.hasError = initialData.hasError;
      this.isOpen = initialData.isOpen;
      this.filteredChannels = initialData.filteredChannels;
    }
  }

  @action async fetch(basePath) {
    this.isLoaded = false;
    this.hasError = false;

    const resp = await fetch(`${basePath}/api/channels/list`);
    this.response = await resp.json();

    if (this.response.constructor === Array) {
      this.isLoaded = true;
    } else {
      this.hasError = true;
    }
  }

  @action toggle() {
    this.isOpen = !this.isOpen;
  }

  @action close() {
    this.isOpen = false;
  }

  @action excludeChannel(id) {
    this.filteredChannels = this.filteredChannels.filter(channel => channel !== id);
  }

  @action includeChannel(id) {
    this.filteredChannels.push(id);
  }

  @computed get channels() {
    return this.response;
  }

  @computed get count() {
    if (this.filteredChannels.length === 0) {
      return this.response.map(channel => channel.count).reduce((sum, next) => sum + next);
    }

    return this.response
      .filter(channel => this.filteredChannels.includes(channel.id))
      .map(channel => channel.count)
      .reduce((sum, next) => sum + next);
  }

  data() {
    return {
      isOpen: this.isOpen,
      response: this.response,
      isLoaded: this.isLoaded,
      hasError: this.hasError,
      filteredChannels: this.filteredChannels,
    };
  }
}

export default FilterService;
