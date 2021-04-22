// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  let hostURL = req.headers.host;
  res.status(200).json( [
      {name: 'clickAction', behaviour: 'click', sound: hostURL + '/examples/mouse/click.mp3', settings: {delay: 500}},
      {name: 'hoverInAction', behaviour: 'hoverIn', sound: hostURL + '/examples/mouse/hoverIn.ogg', settings: {}},
      {name: 'hoverOutAction', behaviour: 'hoverOut', sound: hostURL + '/examples/mouse/hoverIn.ogg', settings: {}},
  ])
}

