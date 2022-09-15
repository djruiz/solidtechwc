import React from "react"
import Axios, { AxiosResponse } from "axios"

interface Props {
  title: string,
  description: string
}

export default (props: Props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  )
}

export const getServerSideProps = async () => {
  const url = process.env.NEXT_PUBLIC_STRAPI_URL + "/api/headline"
  type ResponseBody = { data: { attributes: Props } }
  const headlineRes: AxiosResponse<ResponseBody> = await Axios.get(url)

  return {
    props: {
      title: headlineRes.data.data.attributes.title,
      description: headlineRes.data.data.attributes.description
    }
  }
}