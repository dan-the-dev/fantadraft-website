import MailerLite from 'mailerlite-api-v2-node'
import type { NextApiRequest, NextApiResponse } from 'next'
import { ParsedUrlQuery } from 'querystring'

type Response = {
  message: string
}

function emailIsValid (email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function parseContextQueryParam (param: string, query: ParsedUrlQuery): string {
  if (!query[param]) {
    return ''
  }
  return query[param]!.toString()
}


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const email: string = parseContextQueryParam('email', req.query)
  if (!emailIsValid(email)){
    res.status(400).json({message: 'Email non valida'})
    return
  }
  const mailerLite = MailerLite(process.env.MAILERLITE_API_KEY || '')

  // with Promises
  const data: any = mailerLite.addSubscriberToGroup(parseInt(process.env.MAILERLITE_GROUP_ID || ''), {
    email: email
  }).then((data) => {
    return data
  })

  res.writeHead(301, { location: "/thanks" } );
  res.end();
  return
}
