/* eslint-env jest */
import VideosService from './videos';

describe('VideosService Service', () => {
  let service;

  beforeEach(() => {
    service = new VideosService();
    fetch.resetMocks();
  });

  it('Should init from default state.', () => {
    expect(service.isLoaded).toBe(false);
    expect(service.hasError).toBe(false);
    expect(service.page).toBe(1);
    expect(service.response).toEqual([]);
    expect(service.size).toBe(5);
  });

  it('Should init from serialized state.', () => {
    service = new VideosService({
      response: [{}, {}, {}],
      isLoaded: true,
      hasError: true,
    });
    expect(service.isLoaded).toBe(true);
    expect(service.hasError).toBe(true);
    expect(service.response.length).toBe(3);
  });

  it('Should export serialized state.', () => {
    service = new VideosService({
      response: [{}, {}, {}],
      isLoaded: true,
      hasError: true,
    });
    expect(service.data()).toEqual({
      response: [{}, {}, {}],
      isLoaded: true,
      hasError: true,
    });
  });

  it('Should call endpoint.', async () => {
    const spy = fetch.mockResponseOnce(JSON.stringify([]));

    await service.fetch();
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(
      'http://localhost:3001/api/videos',
    );
  });

  it('Should set hasError if API responds with an object.', async () => {
    fetch.mockResponseOnce(JSON.stringify({}));

    await service.fetch();
    expect(service.hasError).toBe(true);
  });
});
