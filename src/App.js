
import { jsx, ThemeProvider, Container, Layout, Flex, Box } from 'theme-ui';
import theme from './theme/theme.js';
import Card from './components/card';
import ColorSwitch from './components/color-switch';

import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom'
import Helmet from 'react-helmet'


import Button from "./components/button.js";
//import ChatButton from "./components/chat-button.js";
//import GithubButton from "./components/github-button.js";
import Grid from "./components/grid.js";

import Nav from "./components/nav.js";
import Navlink from "./components/navlink.js";

import BackGroundImage from "./components/back-ground-image.js";
import LogoFile from "./components/logo-file.js";

import AnchorLink from "./components/anchor-link.js";
import EnquiryFormSimple from "./components/enquiry-form-simple.js";
import Lead from "./components/lead.js";
import PostCategoriesNav from "./components/post-categories-nav.js";
import Awards from "./components/awards.js";
import EventBox from "./components/event-box.js";

import PostSection from "./components/post-section.js";


// COMMON COMPONENTS
import Features from "./components/features.js";
import Markdown from "./components/markdown.js";
import BlogPostTemplate from "./components/blog-post-template.js";
import Markdownify from "./components/markdownify.js";
import Notification from "./components/notification.js";
import Notifications from "./components/notifications.js";
import Postcard from "./components/postcard.js";
import Spinner from "./components/spinner.js";

//PAGE COMPONENTS
import Content from "./components/content.js";
import Footer from "./components/footer.js";
import Header from "./components/header.js";
import HeroTitle from "./components/hero-title.js";
import HomeSection from "./components/home-section.js";
import Overlay from "./components/overlay.js";
import Page from "./components/page.js";
import PageHeader from "./components/page-header.js";
import PageHero from "./components/page-hero.js";
import Scrolltotop from "./components/scrolltotop.js";
import SectionLabel from "./components/section-label.js";
import SidebarLayout from "./components/sidebar-layout.js";
import TableofContents from "./components/table-of-contents.js";

// CONTENT COMPONENTS
import VideoEmbed from "./components/video-embed.js";
import LazyImage from "./components/lazy-image.js";
import LazyEmbed from "./components/lazy-embed.js";


// INFORMATION COMPONENTS
import GoogleAnalytics from "./components/google-analytics.js";
import Meta from "./components/meta.js";
import MetaInfo from "./components/meta-info.js";
import Release from "./components/release.js";
import Schema from "./components/schema.js";
import TwitterMeta from "./components/twitter-meta.js";

//import CommunityChannelsList from "./components/community-channels-list.js";
//import Community from "./components/community.js";

//import GithuCorner from "./components/github-corner.js";

//import AltContainer from "./components/alt-container.js";

import Widgets from "./components/widgets.js";
import ServiceWorkerNotifications from "./components/service-worker-notifications.js";

// DOCS COMPONENTS
import DocSearch from "./components/doc-search.js";
import DocsNav from "./components/docs-nav.js";
import DocsTemplate from "./components/docs-template.js";
import WidgetDoc from "./components/widget-doc.js";

//import AltLayout from "./components/alt-layout.js";
import EditLink from "./components/edit-link.js";
import WhatsNew from "./components/whats-new.js";
import EnquiryFormControlled from "./components/enquiry-form-controlled.js";
import EnquiryFormSimpleAjax from "./components/enquiry-form-simple-ajax.js";

// PAGE PREVIEWS
import PreviewStyles from "./previewStyles";
import PostPreview from "./post-preview";
import AuthorsPreview from "./authors-preview";
import GeneralPreview from "./general-preview";
import EditorYoutube from "./editor-youtube";
import RelationKitchenSinkPostPreview from "./relation-kitchen-sink-post-preview";

//import data from './data.json'
import CMS from "netlify-cms-app";

// VIEWS
import Contact from './views/contact'
import NoMatch from './views/no-match'
import SinglePost from './views/single-post'
import Home from './views/home'
import About from './views/about'
import Blog from './views/blog'

import { slugify } from './util/url'
import { documentHasTerm, getCollectionTerms } from './utils/collection'

//import config from "./config.json";

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
      "relation-kitchen-sink-post",
      "relation",
      RelationKitchenSinkPostPreview
    );
    CMS.init({ config });
  });

  return <div id="nc-root" />;
};

const RouteWithMeta = ({ component: Component, ...props }) => (
  <Route
    {...props}
    render={routeProps => (
      <Fragment>
        <Meta {...props} />
        <Component {...routeProps} {...props} />
      </Fragment>
    )}
  />
)

class App extends Component {
  state = {
    data
  }

  getDocument = (collection, name) =>
    this.state.data[collection] &&
    this.state.data[collection].filter(page => page.name === name)[0]

  getDocuments = collection => this.state.data[collection] || []

  render () {
    const globalSettings = this.getDocument('settings', 'global')
    const {
      siteTitle,
      siteUrl,
      siteDescription,
      socialMediaCard,
      headerScripts
    } = globalSettings

    const posts = this.getDocuments('posts').filter(
      post => post.status !== 'Draft'
    )
    const categoriesFromPosts = getCollectionTerms(posts, 'categories')
    const postCategories = this.getDocuments('post-categories').filter(
      category => categoriesFromPosts.indexOf(category.name.toLowerCase()) >= 0
    )

    return (
      <Router>
        <div className='React-Wrap'>
          <ScrollToTop />
          <ServiceWorkerNotifications reloadOnUpdate />
          <GithubCorner url='resource-hub.revrebel.io' />
          <Helmet
            defaultTitle={siteTitle}
            titleTemplate={`${siteTitle} | %s`}
          />
          <Meta
            headerScripts={headerScripts}
            absoluteImageUrl={
              socialMediaCard &&
              socialMediaCard.image &&
              siteUrl + socialMediaCard.image
            }
            twitterCreatorAccount={
              socialMediaCard && socialMediaCard.twitterCreatorAccount
            }
            twitterSiteAccount={
              socialMediaCard && socialMediaCard.twitterSiteAccount
            }
          />

          <Nav />

          <Routes>
            <RouteWithMeta
              path='/'
              exact
              component={Home}
              description={siteDescription}
              fields={this.getDocument('pages', 'home')}
            />
            <RouteWithMeta
              path='/about/'
              exact
              component={About}
              fields={this.getDocument('pages', 'about')}
            />
            <RouteWithMeta
              path='/contact/'
              exact
              component={Contact}
              fields={this.getDocument('pages', 'contact')}
              siteTitle={siteTitle}
            />
            <RouteWithMeta
              path='/blog/'
              exact
              component={Blog}
              fields={this.getDocument('pages', 'blog')}
              posts={posts}
              postCategories={postCategories}
            />

            {posts.map((post, index) => {
              const path = slugify(`/blog/${post.title}`)
              const nextPost = posts[index - 1]
              const prevPost = posts[index + 1]
              return (
                <RouteWithMeta
                  key={path}
                  path={path}
                  exact
                  component={SinglePost}
                  fields={post}
                  nextPostURL={nextPost && slugify(`/blog/${nextPost.title}/`)}
                  prevPostURL={prevPost && slugify(`/blog/${prevPost.title}/`)}
                />
              )
            })}

            {postCategories.map(postCategory => {
              const slug = slugify(postCategory.title)
              const path = slugify(`/blog/category/${slug}`)
              const categoryPosts = posts.filter(post =>
                documentHasTerm(post, 'categories', slug)
              )
              return (
                <RouteWithMeta
                  key={path}
                  path={path}
                  exact
                  component={Blog}
                  fields={this.getDocument('pages', 'blog')}
                  posts={categoryPosts}
                  postCategories={postCategories}
                />
              )
            })}

            <Route render={() => <NoMatch siteUrl={siteUrl} />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App