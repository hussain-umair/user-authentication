const handler = app => app.get('/', async (req, res) => {
  res.status(200).json({ dogs: 'Bhao' })
})

export default handler
