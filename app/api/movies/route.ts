export async function GET(request: Request) {
  const url = new URL(request.url)
  const title = url.searchParams.get('title')
  const res = await fetch(
    `https://omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&s=${title}`
  )
  const data = await res.json()
  return Response.json({ data })
}
