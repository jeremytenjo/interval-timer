import nodePath from 'path'

// https://github.com/sindresorhus/capture-website#readme
import captureWebsite, { type FileOptions } from 'capture-website'

import log from '../../../../utils/node/log.js'
import createFolder from '../../../../utils/node/createFolder.js'
import removeFile from '../../../../utils/node/removeFile.js'

export type CaptureScreenshotProps = {
  url: string
  path: string
  sizes: {
    width: number
    height: number
  }[]
  captureOptions?: FileOptions
  pathPrefix?: string
}

export default async function captureScreenshot({
  url,
  path,
  sizes,
  pathPrefix,
  captureOptions = {},
}: CaptureScreenshotProps) {
  await createFolder({ paths: [pathPrefix] })

  return await Promise.all(
    sizes.map(async (size) => {
      const fullPath = nodePath.join(
        pathPrefix,
        `${path}_${size.width}x${size.height}.png`,
      )

      return await capture({
        url,
        path: fullPath,
        width: size.width,
        height: size.height,
        captureOptions,
      })
    }),
  )
}

const capture = async ({ url, path, width, height, captureOptions }) => {
  const { spinner: itemSpinner } = log(`Capturing ${url}`, { loading: true })

  await removeFile({ paths: [path] })
  await captureWebsite.file(url, path, {
    width,
    height,
    // https://github.com/sindresorhus/capture-website#options
    ...captureOptions,
  })

  return itemSpinner.succeed(`Captured ${path}`)
}
