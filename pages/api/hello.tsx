// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiResponse, NextApiRequest } from 'next';

// it should not be a react component
export default function Hello(req: NextApiRequest, res: NextApiResponse) {
  res.statusCode = 200;
  console.log(req.body);
  console.log(req.query); //?q=1 => {q =1}
  res.send('///');
  res.setHeader('Set-Cookie', 'program=true');
  res.json({ name: 'John Doe' });
}

//http://localhost:3000/api/hello

// fetch('http://localhost:3000/api/hello', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/' },
//   body: JSON.stringify({ username: 'saif', password: '12 ' }),
// });

// we get the consoleof req.body
