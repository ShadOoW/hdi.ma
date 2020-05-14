import React from 'react';
import PropTypes from 'prop-types';
import { isServer } from '../utils/isServer';
import LanguageService from './language';
import VideosService from './videos';

let clientSideServices;

const getServices = (initialData = { language: '', videos: {} }) => {
  if (isServer) {
    return {
      languageService: new LanguageService(initialData.language),
      videosService: new VideosService(initialData.videos),
    };
  }
  if (!clientSideServices) {
    clientSideServices = {
      languageService: new LanguageService(initialData.language),
      videosService: new VideosService(initialData.videos),
    };
  }

  return clientSideServices;
};

const ServiceContext = React.createContext();

const ServiceProvider = ({ value, children }) => (
  <ServiceContext.Provider value={value}>{children}</ServiceContext.Provider>
);

ServiceProvider.propTypes = {
  value: PropTypes.shape({
    languageService: PropTypes.object.isRequired,
    videosService: PropTypes.object.isRequired,
  }).isRequired,
  children: PropTypes.node.isRequired,
};

const useMobxServices = () => React.useContext(ServiceContext);

export { getServices, ServiceProvider, useMobxServices };
