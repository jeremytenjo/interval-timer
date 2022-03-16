// https://github.com/capacitor-community/keep-awake
import { KeepAwake as CapacitorKeepAwake } from '@capacitor-community/keep-awake'

export const KeepAwake = CapacitorKeepAwake.keepAwake
export const AllowSleep = CapacitorKeepAwake.allowSleep

export default function useAwake() {
  const keepAwake = CapacitorKeepAwake.keepAwake
  const allowSleep = CapacitorKeepAwake.allowSleep

  return {
    keepAwake,
    allowSleep,
  }
}
