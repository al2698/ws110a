import { Application } from "https://deno.land/x/oak/mod.ts";
import { table99 } from "./99.js";


const app = new Application();

app.use((ctx) => {
    ctx.response.body = `
    <html>
    <head>
      <style>
        body{
          margin: 0;
        }
        table{
            height: 700px;
            width: 700px;
            text-align: center;
            font-size: 30px;
            background-color: #0a265b;
            border-collapse:collapse ;
            color:#f2d6a1;
        }
        th{
            padding: 20px;
            background-color: #5C3F0A
        }
      </style>
    </head>
    <body>
        ${table99()}
    </body>
</html>
    `
  });

console.log('start at : http://127.0.0.1:8000')
await app.listen({ port: 8000 });