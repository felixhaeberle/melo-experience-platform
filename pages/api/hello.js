// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getMeloList } from '../../lib/api';

export default async (req, res) => {
  let hostURL = req.headers.host;
  const interactions = await getMeloList();
  // let data = [
  //   {name: 'clickAction', behaviour: 'click', sound: hostURL + '/examples/mouse/click.mp3', settings: {delay: 500}},
  //   {name: 'hoverInAction', behaviour: 'hoverIn', sound: hostURL + '/examples/mouse/hoverIn.ogg', settings: {}},
  //   {name: 'hoverOutAction', behaviour: 'hoverOut', sound: hostURL + '/examples/mouse/hoverIn.ogg', settings: {}},
  // ];
  res.status(200).json(interactions.slice(1, interactions.length));
}
