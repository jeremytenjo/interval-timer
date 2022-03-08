import fs from 'fs-extra'

type CreateFolderProps = {
  paths: string[]
}

/**
 * https://github.com/jprichardson/node-fs-extra/blob/master/docs/ensureDir-sync.md
 */
export default async function createFolder({ paths }: CreateFolderProps) {
  await Promise.all(
    paths.map(async (path) => {
      await fs.ensureDirSync(path)
    }),
  )
}
