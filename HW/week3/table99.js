import { Application } from "https://deno.land/x/oak/mod.ts";
import { table99 } from "./99.js";


const app = new Application();

app.use((ctx) => {
    ctx.response.body = `
    <html>
    <head>
    <link rel="stylesheet" type="text/css" href="https://al2698.github.io/ws110a/HW/week3/table99.css"></link>
    </head>
    <body>
        ${table99()}
    </body>
</html>
    `
  });

console.log('start at : http://127.0.0.1:8000')
await app.listen({ port: 8000 });