import { Skeleton, SkeletonProps } from '@mantine/core'

type LoadingSkeletonProps = SkeletonProps & {
  height?: number
}

export function LoadingSkeleton({
  height = 100,
  ...props
}: LoadingSkeletonProps) {
  return <Skeleton height={height} {...props} />
}
