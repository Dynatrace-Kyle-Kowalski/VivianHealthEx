import type { CliOptions } from 'dt-app';

const config: CliOptions = {
  environmentUrl: 'https://bwm98081.apps.dynatrace.com/',
  app: {
    name: 'my-new-app',
    version: '0.0.0',
    description: 'An empty project',
    id: 'my.my.new.app',
    scopes: [{ name: 'storage:logs:read', comment: 'default template' }, { name: 'storage:buckets:read', comment: 'default template' }]
  },
};

module.exports = config;