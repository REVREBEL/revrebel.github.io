
/Users/garystringham/Sites/reactwebapp/my-app/src/content/editoryoutube
import React from "react";
import CMS from "netlify-cms-app";
import previewStyles from "./content/preview_styles";
import PostPreview from "./content/post_preview";
import AuthorsPreview from "./content/authors_preview";
import GeneralPreview from "./content/general_preview";
import EditorYoutube from "./content/editor_youtube";
import RelationKitchenSinkPostPreview from "./components/relation_kitchen_sink_post_preview";

import config from "../public/admin/config.json";
import '../src/globalStyles.css';
import data from '../src/data.json'; EEEEEE
import About from '../src/views/about';
import Blog from '../src/views/blog';
import Contact from '../src/views/contact';
import Home from '../src/views/home';
import SinglePost from '../src/views/single_post';


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

export default NetlifyCMS;
console.log('React version', React.version)
const CMS = window.CMS
CMS.registerPreviewStyle(
  'https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.css'
)
CMS.registerPreviewStyle('/admin/cms.bundle.css')
const getDocument = (collection, name) =>
  data[collection] && data[collection].filter(page => page.name === name)[0]
const getDocuments = (collection, name) => data[collection]
const globalSettings = getDocument('settings', 'global')
const posts = getDocuments('posts')



// Preview Templates
CMS.registerPreviewTemplate('home-page', ({ entry }) => (
  <Home fields={entry.toJS().data} />
))
CMS.registerPreviewTemplate('about-page', ({ entry }) => (
  <About fields={entry.toJS().data} />
))
CMS.registerPreviewTemplate('contact-page', ({ entry }) => (
  <Contact fields={entry.toJS().data} siteTitle={globalSettings.siteTitle} />
))
CMS.registerPreviewTemplate('blog-page', ({ entry }) => (
  <Blog fields={entry.toJS().data} posts={posts} />
))
CMS.registerPreviewTemplate('posts', ({ entry }) => (
  <SinglePost fields={entry.toJS().data} />
))

// Return to home when user logging out
window.netlifyIdentity.on('logout', function () {
  document.location.href = '/'
})

// Log netlifySiteURL if editing on localhost
if (
  window.location.hostname === 'localhost' &&
  window.localStorage.getItem('netlifySiteURL')
) {
  console.log(
    `%cnetlifySiteURL: ${window.localStorage.getItem('netlifySiteURL')}`,
    'color: hotpink; font-size: 15px'
  )
}
