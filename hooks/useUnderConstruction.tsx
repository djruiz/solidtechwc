import { ChangeEvent, FormEvent, ReactNode, useEffect, useState } from "react"
import Image from "next/image"

export function useUnderConstruction(override?: boolean): { showSite: boolean, underConstructionMessage: ReactNode } {
  const [devPasswordInput, setDevPasswordInput] = useState<string>("")
  const [showUnderConstructionMessage, setShowUnderConstructionMessage] = useState(false)
  const [showSite, setShowSite] = useState(false)

  const publicDeveloperKey = "solidtech1990"

  function handleTimeout() {
    setShowUnderConstructionMessage(true)
  }

  function handleChangeDeveloperPassword(ev: ChangeEvent<HTMLInputElement>) {
    setDevPasswordInput(ev.target.value)
  }

  function handleSubmitDeveloperPassword(ev: FormEvent) {
    ev.preventDefault()
    if (devPasswordInput == publicDeveloperKey) {
      setShowSite(true)
      document.cookie = "__dev__=true"
    }
  }

  function getCookie(name: string) {
    const value = `; ${document.cookie}`
    const parts = value.split(`; ${name}=`)
    if (parts.length === 2) return parts.pop()!.split(';').shift()
    return null
  }

  useEffect(() => {
    if (getCookie("__dev__")) {
      setShowSite(true)
    }
  }, [])

  useEffect(() => {
    setTimeout(handleTimeout, 500)
  }, [])

  const underConstructionMessage = showUnderConstructionMessage ? (
    <div className="bg-white d-flex align-items-center justify-content-center" style={{ width: "100vw", height: "100vh" }
    }>
      <form onSubmit={handleSubmitDeveloperPassword} className="text-center" >
        <Image src={"/barrier.png"} width={160} height={80} />
        <h1 className="pt-2" > This website is under construction.</h1>
        <p> Input the developer password to access this site.</p>
        <input value={devPasswordInput} onChange={handleChangeDeveloperPassword} className="form-control text-center" type="password" placeholder="••••••••••••••••••••••" />
        <button type="submit" className="btn btn-primary btb-lg w-100 mt-2">Submit</button>
      </form>
    </div>
  ) : ""

  if (override) {
    return {
      underConstructionMessage,
      showSite: true
    }
  }

  return { underConstructionMessage, showSite }
}