import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from '../types/config';

export function buildCssLoader(isDev: boolean) {
  return ({
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (path: string) => (!!path.includes('.module.scss')),
            localIdentName:
              isDev
                ? '[path][name]__[local]'
                : '[hash:base64:8]',
          },
        },
      },
      'sass-loader',
    ],
  })
}