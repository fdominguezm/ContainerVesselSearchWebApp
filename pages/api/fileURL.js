
export default async function fileURLHandler(req,res) {
    const { reportId, fileGUID } = req.query;
    try{
        const myURL = `https://repack.sealdsweet.com/webapp/api/ReportalReportLink?Params={%22ReportId%22:%20%22${reportId}%22,%20%22fileGUID%22:%20%22${fileGUID}%22}`;
        const result = await fetch(myURL).then(response => {
            return response.json();
          })
          .catch(error => {
            console.error(error)});
            
        res.status(200).send({result});
    }catch (err){
        res.status(500).json({error: 'failed to load data'});
    }
  }
  