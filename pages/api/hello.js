// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  let hostURL = req.headers.host;
  res.status(200).json( {
    clickAction: {behaviour: 'click', sound: hostURL + '/examples/scroll/click.mp3', settings: {delay: 500}},
  })
}
