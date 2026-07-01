// Netlify Function for Phase 2: real AI outreach generation.
// Set OPENAI_API_KEY in Netlify environment variables before using.
export default async (request: Request) => {
  if (request.method !== 'POST') return new Response('Method not allowed', { status: 405 });
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) return Response.json({ error: 'OPENAI_API_KEY not configured' }, { status: 500 });
  const { company, issue, offer } = await request.json();
  const prompt = `Write a concise cold email for ${company}. Observed issue: ${issue}. Offer: ${offer}. Tone: helpful, specific, no hype. Include subject.`;
  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}` },
    body: JSON.stringify({ model: 'gpt-4.1-mini', messages: [{ role: 'user', content: prompt }], temperature: 0.7 })
  });
  const data = await res.json();
  return Response.json({ text: data?.choices?.[0]?.message?.content ?? 'No response generated.' });
};
