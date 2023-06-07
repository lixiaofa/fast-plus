import installer from './defaults'
export * from '@fast-plus/components'
export * from '@fast-plus/constants'
export * from '@fast-plus/directives'
export * from '@fast-plus/hooks'
export * from './make-installer'

export const install = installer.install
export const version = installer.version
export default installer

export { default as dayjs } from 'dayjs'
