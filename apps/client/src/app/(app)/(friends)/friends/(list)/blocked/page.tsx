import { FriendBlockedItem } from '@/components/friends/friend-blocked-item'
import { Icons } from '@/components/icons'

interface FriendBlocked {
  id: number
  name: string
}

async function getFriendBlocked(): Promise<FriendBlocked[]> {
  await new Promise(resolve => setTimeout(resolve, 1000))

  return [{ id: 1, name: 'John Doe' }]
}

export default async function FriendBlockedPage() {
  const friends = await getFriendBlocked()

  if (!friends.length)
    return (
      <div className='flex flex-col items-center gap-1'>
        <Icons.timesCircle className='h-14 w-14 text-muted-foreground' />
        <p className='text-base font-semibold'>You have no blocked friend.</p>
      </div>
    )

  return (
    <>
      {friends.map(friend => (
        <FriendBlockedItem key={friend.id} friend={friend} />
      ))}
    </>
  )
}