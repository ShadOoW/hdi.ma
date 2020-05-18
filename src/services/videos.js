import { observable, action, computed } from 'mobx';

class VideosService {
  @observable response = [];

  @observable isLoaded = false;

  @observable hasError = false;

  constructor(
    initialData = { response: [], isLoaded: false, hasError: false },
  ) {
    if (initialData) {
      this.response = initialData.response;
      this.isLoaded = initialData.isLoaded;
      this.hasError = initialData.hasError;
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

  @computed get videos() {
    return this.response;
  }

  data() {
    return {
      response: this.response,
      isLoaded: this.isLoaded,
      hasError: this.hasError,
    };
  }
}

export default VideosService;
