import { UserButton } from "@clerk/nextjs"

const page = () => {
  return (
    <UserButton showName afterSignOutUrl="/" />
  )
}

export default page