import OpenAI from 'openai'
import { NextResponse } from 'next/server'
export async function POST(req: Request){
  try{
    const {business, notes}=await req.json()
    if(!process.env.OPENAI_API_KEY){return NextResponse.json({error:'OPENAI_API_KEY is not set yet.'},{status:400})}
    const client=new OpenAI({apiKey:process.env.OPENAI_API_KEY})
    const completion=await client.chat.completions.create({model:'gpt-4o-mini',messages:[{role:'system',content:'You write concise personalized B2B outreach for an AI growth agency.'},{role:'user',content:`Business: ${business}\nNotes: ${notes}\nWrite a friendly cold email under 130 words.`}]})
    return NextResponse.json({text:completion.choices[0]?.message?.content || ''})
  }catch(e){return NextResponse.json({error:'Could not generate outreach.'},{status:500})}
}
