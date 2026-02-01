'use client'

import { ErrorState } from '@/components/error-state'
import { LoadingState } from '@/components/loading-state'
import { useTRPC } from '@/trpc/client'
import { useSuspenseQuery } from '@tanstack/react-query'

export function AgentsView() {
  const trpc = useTRPC()
  const { data } = useSuspenseQuery(trpc.agents.getMany.queryOptions())

  return <div className="">{JSON.stringify(data, null, 2)}</div>
}

export const AgentsViewLoading = () => (
  <LoadingState
    title="Loading agents..."
    description="This may take a few seconds"
  />
)
export const AgentsViewError = () => (
  <ErrorState title="Error Loading Agents" description="Something went wrong" />
)
