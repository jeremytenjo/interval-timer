import path from 'path'

import getAppConfig from '../../../app.config.js'
import captureScreenshots ,
{
  type CaptureScreenshotsProps
} from '../../../devtools/helpers/assets/captureScreenshots/captureScreenshots.js'
 
export default async function capturePageScreenshots() {
  const appConfig = await getAppConfig()
  const mobileSize = {
    width: 400,
    height: 800,
  }

  const urlPrefix = `http://localhost:${appConfig.server.local.port}`
  const pathPrefix = path.join(process.cwd(), 'public/images/screenshots/pages')
  const delay = 20
  const hideElements = ['p.firebase-emulator-warning']

  const list: CaptureScreenshotsProps['list'] = [
    {
      url: '',
      path: 'home',
      sizes: [mobileSize],
      captureOptions: { hideElements },
    },
    {
      url: 'create-timer',
      path: 'create-timer',
      sizes: [mobileSize],
      captureOptions: { delay, hideElements },
    },
  ]

  captureScreenshots({
    urlPrefix,
    list,
    pathPrefix,
  })
}
