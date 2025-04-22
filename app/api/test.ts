export default async function handler(req, res) {

  console.log('request', req);

  // Postman fails to get this too

  if (req.method === 'GET') {
    const test = await { testObject: "Test String" }
    res.status(200).json(test)
  }
}
