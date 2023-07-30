import { Configuration } from 'webpack';

import { BuildOptions } from './types/config';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { buildPlugins } from './buildPlugins';
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig(params: BuildOptions): Configuration {
    const { mode, paths, isDev } = params;
    return {
        mode,
        module: {
            rules: buildLoaders(params),
        },
        resolve: buildResolvers(params),
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true,
        },
        plugins: buildPlugins(params),
        devtool: isDev ? 'inline-source-map' : false,
        devServer: isDev ? buildDevServer(params) : undefined,
    };
}
