import kebabCase from 'lodash.kebabCase'

export const slugify = (string = '') =>
  // keeps forward slashes
  string
    .toLowerCase()
    .split('/')
    .map(kebabCase)
    .join('/')
