
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-snapshot';

import 'modern-normalize/modern-normalize.css';
import './globalStyles.css';
import App from './app';
//import ServiceWorker, { unregister } from './serviceworker.js';
//import data from './utils/data';
import LogoFile from './components/logo-file';
import CMS from "netlify-cms-app";
import PreviewStyles from "./previewStyles";
import PostPreview from "./post-preview";
import AuthorsPreview from "./authors-preview";
import GeneralPreview from "./general-preview";
import EditorYoutube from "./editor-youtube";
import RelationKitchenSinkPostPreview from "./relation-kitchen-sink-post-preview";
import Config from "./config.json";
import { ThemeUIProvider } from 'theme-ui';
import { theme } from './theme/theme';

const NetlifyCMS = () => {
  React.useEffect(() => {
    console.log(`CMS [${process.env.NODE_ENV}]`, CMS);
    if (process.env.NODE_ENV === "development") {
      config.load_config_file = false;
      config.local_backend = {
        url: "http://localhost:3000/api/v1",
      };
    }
    CMS.registerPreviewTemplate("posts", PostPreview);
    CMS.registerPreviewStyle(previewStyles, { raw: true });
    CMS.registerPreviewTemplate("authors", AuthorsPreview);
    CMS.registerPreviewTemplate("general", GeneralPreview);
    CMS.registerEditorComponent(EditorYoutube);
    CMS.registerWidget(
      "relationKitchenSinkPost",
      "relation",
      RelationKitchenSinkPostPreview
    );
    CMS.init({ config });
  });

  return <div id="nc-root" />;
};

const rootEl = document.getElementById('root')
render(<App />, rootEl)

if (module.hot) {
  module.hot.accept('./app', () => {
    const App = require('./app').default
    render(<App />, rootEl)
  })
};

if (process.env.REACT_APP_SITE_URL && 'localStorage' in window) {
  window.localStorage.setItem('netlifySiteURL', process.env.REACT_APP_SITE_URL)
};

const globalSettings =
  data.settings && data.settings.filter(doc => doc.name === 'global')[0]

if (globalSettings) {
  globalSettings.enableServiceWorker ? ServiceWorker() : unregister()
};


