import MailerLite from 'mailerlite-api-v2-node'
import type { NextApiRequest, NextApiResponse } from 'next'
import { ParsedUrlQuery } from 'querystring'

function emailIsValid (email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function parseContextQueryParam (param: string, query: ParsedUrlQuery, defaultValue: string = ''): string {
  if (!query[param]) {
    return defaultValue
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
  const locale: string = parseContextQueryParam('locale', req.query, 'it')
  const mailerLite = MailerLite(process.env.MAILERLITE_API_KEY || '')

  const italianGroup = process.env.MAILERLITE_GROUP_ID;
  const englishGroup = process.env.MAILERLITE_GROUP_ID_ENG;

  const activeGroup = locale === 'it' ? italianGroup : englishGroup
  console.log(activeGroup)
  // with Promises
  const data: any = mailerLite.addSubscriberToGroup(parseInt(activeGroup || ''), {
    email: email
  }).then((data) => {
    return data
  })

  res.writeHead(301, { location: (locale === 'it' ? '/thanks' : '/en/thanks') } );
  res.end();
  return
}
