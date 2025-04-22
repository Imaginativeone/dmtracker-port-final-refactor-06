export default async function handler(req, res) {
  if (req.method === 'GET') {
    const posts = await { testObject: "Test String" }
    res.status(200).json(posts)
  }
}
