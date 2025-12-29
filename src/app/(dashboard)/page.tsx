import HomeView from '@/modules/home/ui/views/home-view'
import { redirect } from 'next/navigation'
import { headers } from 'next/headers'
import { auth } from '@/lib/auth'
export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers()
  })

  if (!session) {
    redirect('/sign-in')
  }
  return <HomeView />
}
