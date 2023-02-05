export default function hwid(req, res) {
  let hwid = []
  let detections = ["hwid", "identifier", "fingerprint"]
  for (let i=0;i<Object.keys(req.headers).length;i++) {
    console.log(req.headers)
    let headerName = Object.keys(req.headers)[i]
    let headerValue = req.headers[headerName]
    for (let detection of detections) {
      if (headerName.toLowerCase().includes(detection)) {
        hwid.push(headerValue)
      }
    }
  
  }
  if (req.query.one) return res.send(hwid[0] || "failed to detect")
  res.status(200).json({detected: hwid})
}
