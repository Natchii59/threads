import { ThreadLoading } from '@/components/thread/loading'

export default function ThreadsLoading() {
  return (
    <div className='grid gap-4'>
      {Array.from({ length: 20 }).map((_, i) => (
        <ThreadLoading key={i} />
      ))}
    </div>
  )
}
