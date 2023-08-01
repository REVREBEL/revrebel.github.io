typescript import { CmsConfig, CmsCollection, CmsField } from 'netlify-cms-core'; import * as YAML from 'yaml'; import * as fs from 'fs'; import * as path from 'path';

const defaultMetaFields: CmsField[] = [ { label: 'Title', name: 'title', widget: 'string' }, { label: 'Page URL', name: 'url', widget: 'string' }, { label: 'Meta', name: 'meta', widget: 'object', fields: [ { label: 'Title', name: 'title', widget: 'string' }, { label: 'Description', name: 'description', widget: 'string' } ] } ];

const demoPage: CmsCollection = { name: 'demopage', label: 'Demo page', folder: 'src/pages/demopage', create: true, delete: true, extension: 'md', slug: '{{url}}', fields: [ { label: 'Template Key', name: 'templateKey', widget: 'hidden', default: 'demoPage' }, ...defaultMetaFields, { label: 'Body', name: 'body', widget: 'markdown' }, ] };

const config: CmsConfig = { backend: { name: 'git-gateway', branch: 'master' }, media_folder: 'static/img', public_folder: '/img', publish_mode: 'editorial_workflow', logo_url: 'https://res.cloudinary.com/revrebel/image/upload/v1650759995/RevRebel/icon/outline/icon-outline-multicolor-lightnavy_ryuhlp.png', collections: [ demoPage ] };
