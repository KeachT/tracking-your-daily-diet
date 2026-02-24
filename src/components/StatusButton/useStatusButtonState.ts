import { useCallback, useEffect, useRef, useState } from 'react'

export type SaveStatus = 'idle' | 'loading' | 'success' | 'error'

export function useStatusButtonState(resetDelayMs: number) {
  const [saveStatus, setSaveStatus] = useState<SaveStatus>('idle')
  const resetSaveStatusTimeoutRef = useRef<ReturnType<
    typeof setTimeout
  > | null>(null)

  const clearResetSaveStatusTimeout = useCallback(() => {
    if (!resetSaveStatusTimeoutRef.current) {
      return
    }
    clearTimeout(resetSaveStatusTimeoutRef.current)
    resetSaveStatusTimeoutRef.current = null
  }, [])

  const queueResetSaveStatus = useCallback(() => {
    clearResetSaveStatusTimeout()
    resetSaveStatusTimeoutRef.current = setTimeout(() => {
      setSaveStatus('idle')
      resetSaveStatusTimeoutRef.current = null
    }, resetDelayMs)
  }, [clearResetSaveStatusTimeout, resetDelayMs])

  useEffect(() => {
    return () => clearResetSaveStatusTimeout()
  }, [clearResetSaveStatusTimeout])

  const startLoading = useCallback(() => {
    clearResetSaveStatusTimeout()
    setSaveStatus('loading')
  }, [clearResetSaveStatusTimeout])

  const markSuccess = useCallback(() => {
    setSaveStatus('success')
    queueResetSaveStatus()
  }, [queueResetSaveStatus])

  const markError = useCallback(() => {
    setSaveStatus('error')
    queueResetSaveStatus()
  }, [queueResetSaveStatus])

  return {
    saveStatus,
    startLoading,
    markSuccess,
    markError,
  }
}
