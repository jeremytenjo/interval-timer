import log from '../../../utils/node/log.js'

import captureScreenshot, {
  CaptureScreenshotProps,
} from './captureScreenshot/captureScreenshot.js'

export type CaptureScreenshotsProps = {
  urlPrefix: string
  list: {
    url: string
    path: string
    sizes: CaptureScreenshotProps['sizes']
    captureOptions?: CaptureScreenshotProps['captureOptions']
  }[]
  pathPrefix?: CaptureScreenshotProps['pathPrefix']
}

export default async function captureScreenshots({
  urlPrefix,
  list,
  pathPrefix,
}: CaptureScreenshotsProps) {
  const { spinner } = log('Capturing screenshots', { loading: true })

  try {
    await Promise.all(
      list.map(async (item) => {
        await captureScreenshot({
          pathPrefix,
          url: `${urlPrefix}/${item.url}`,
          path: item.path,
          sizes: item.sizes,
          captureOptions: item.captureOptions,
        })
      }),
    )

    spinner.succeed('Screenshots captured')
    process.exit(0)
  } catch (error: any) {
    log(error, { error: true })
  }
}
