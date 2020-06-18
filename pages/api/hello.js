const Hello = (req, res) => {
  res.statusCode = 200
  res.json({ name: 'John Doe' })
}

export default Hello
