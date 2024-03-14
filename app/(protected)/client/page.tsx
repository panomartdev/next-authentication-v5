"use client"
import { auth } from "@/auth"
import UserInfo from "@/components/auth/user-info"
import { useCurrentUser } from "@/hooks/use-current-user"

const ClientPage = () => {
  const user = useCurrentUser();

  return (
      <UserInfo user={user} label="Client Components"/>
  )
}

export default ClientPage
