module.exports = [
  {
    input: 'src/javascripts/la-map.js',
    output: {
      file: 'application/static/javascripts/la-map.js',
      format: 'iife'
    }
  },
  {
    input: 'src/javascripts/region-map.js',
    output: {
      file: 'application/static/javascripts/region-map.js',
      format: 'iife'
    }
  },
  {
    input: 'src/javascripts/explorer-map.js',
    output: {
      file: 'application/static/javascripts/explorer-map.js',
      format: 'iife'
    }
  },
  {
    input: 'src/javascripts/search-map.js',
    output: {
      file: 'application/static/javascripts/search-map.js',
      format: 'iife'
    }
  },
  {
    input: 'src/javascripts/pinpoint.js',
    output: {
      file: 'application/static/javascripts/pinpoint.js',
      format: 'iife'
    }
  }
]
