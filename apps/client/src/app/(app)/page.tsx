import { ThreadWithFields } from '@/types'

import { ThreadsList } from '@/components/thread/threads-list'
import { THREADS_FETCH_COUNT } from '@/lib/constants'
import { db } from '@/lib/db'
import { getCurrentUser } from '@/lib/session'

async function getAllLastThreads(): Promise<ThreadWithFields[]> {
  const data = await db.thread.findMany({
    where: {
      createdAt: {
        lte: new Date()
      }
    },
    take: THREADS_FETCH_COUNT,
    orderBy: {
      createdAt: 'desc'
    },
    include: {
      author: true,
      likes: {
        select: {
          userId: true
        }
      }
    }
  })

  return data
}

export default async function HomePage() {
  const threads = await getAllLastThreads()
  const currentUser = await getCurrentUser()

  return <ThreadsList baseThreads={threads} currentUser={currentUser} />
}
