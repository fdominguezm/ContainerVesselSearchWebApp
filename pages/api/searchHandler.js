// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function fetchResults(req, res) {
  const {idNumber, toDate, fromDate} = req.query;

  const result = await fetch(`https://repack.sealdsweet.com/webapp/api/ReportalSearch?Params={%22Container%22:%22${idNumber}%22,%22StartDate%22:%222021-01-01%22,%22EndDate%22:%222023-12-20%22}`).then(response => {
    return response.json();
  })
  .catch(error => {
    console.error(error)});

  res.status(200).send({result});
}