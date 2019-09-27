import { AngularCompilerPlugin, AngularCompilerPluginOptions } from '@ngtools/webpack';
import * as ts from 'typescript';
import * as webpack from 'webpack';
import { jitTransformers } from './transformers';

export default {
  config(config: webpack.Configuration) {
    const angularCompilerPlugin = findAngularCompilerPlugin(config) as AngularCompilerPlugin;

    if (!angularCompilerPlugin) {
      throw new Error('Could not inject TypeScript Transformer: Webpack AngularCompilerPlugin not found');
    }

    const options: AngularCompilerPluginOptions = {
      ...angularCompilerPlugin.options,
      directTemplateLoading: false
    };

    config.plugins = removeCompilerPlugin(config.plugins, angularCompilerPlugin);

    const newCompilerPlugin = new AngularCompilerPlugin(options);

    addTransformers(newCompilerPlugin, jitTransformers);

    config.plugins.push(newCompilerPlugin);

    return config;
  }
};

function findAngularCompilerPlugin(config: webpack.Configuration) {
  return config.plugins && config.plugins.find(isAngularCompilerPlugin);
}

function isAngularCompilerPlugin(plugin: webpack.Plugin) {
  return plugin instanceof AngularCompilerPlugin;
}

function addTransformers(acp: any, transformers: Array<ts.TransformerFactory<ts.SourceFile>>): void {
  // The AngularCompilerPlugin has no public API to add transformers, use private API _transformers instead
  acp._transformers = [...transformers, ...acp._transformers];
}

function removeCompilerPlugin(plugins: webpack.Plugin[], acp: webpack.Plugin) {
  return plugins.filter(plugin => plugin !== acp);
}
