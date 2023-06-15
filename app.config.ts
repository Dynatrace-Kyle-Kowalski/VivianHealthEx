import type { CliOptions } from 'dt-app';

const config: CliOptions = {
  environmentUrl: 'https://mdl48452.apps.dynatrace.com/',
  app: {
    name: 'my-new-app',
    version: '0.0.0',
    description: 'An empty project',
    id: 'my.my.new.app',
    scopes: [
      { name: 'storage:logs:read', comment: 'default template' },
      { name: 'storage:buckets:read', comment: 'default template' },
      {name: 'storage:metrics:read', comment: 'Read buckets from Grail'}]
  },
};

module.exports = config;