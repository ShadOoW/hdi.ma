import { observable, action, computed } from 'mobx';

class VideosService {
  @observable response = [];

  @observable isLoaded = false;

  @observable hasError = false;

  @observable filteredChannels = [];

  constructor(
    initialData = { response: [], isLoaded: false, hasError: false, filteredChannels: [] },
  ) {
    if (initialData) {
      this.response = initialData.response;
      this.isLoaded = initialData.isLoaded;
      this.hasError = initialData.hasError;
      this.filteredChannels = initialData.filteredChannels;
    }
  }

  @action async fetch(basePath) {
    this.isLoaded = false;
    this.hasError = false;

    const resp = await fetch(`${basePath}/api/videos/list`);
    this.response = await resp.json();
    if (this.response.constructor === Array) {
      this.isLoaded = true;
    } else {
      this.hasError = true;
    }
  }

  @action setFilteredChannels(filteredChannels) {
    this.filteredChannels = filteredChannels;
  }

  @computed get videos() {
    if (this.filteredChannels.length === 0) {
      return this.response;
    }

    return this.response.filter(video => this.filteredChannels.includes(video.channel.channelId));
  }

  data() {
    return {
      response: this.response,
      isLoaded: this.isLoaded,
      hasError: this.hasError,
      filteredChannels: this.filteredChannels,
    };
  }
}

export default VideosService;
