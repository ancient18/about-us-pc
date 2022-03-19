import { useRouter } from "next/router";
import { useEffect } from "react";
export default function Join({ vh, Component }) {
  const router = useRouter()
  useEffect(() => {
    router.push('/join/joinus')
  }, [])

  return (
    <>
      {
        Component ? <Component vh={vh} /> : <div></div>
      }
    </>
  )
}
