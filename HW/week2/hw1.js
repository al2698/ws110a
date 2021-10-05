import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

app.use((ctx) => {
  // ctx.response.type = 'text/plain'
  // ctx.response.type = 'text/html'
  ctx.response.body = `<!DOCTYPE html>
  <html>
      <style>
          table{width: 500px;height: 500px;background-color: rgb(175, 232, 255);border-style: solid;border-width: 3px;border-collapse: collapse;}
          th{width: 50px;border-style: solid;border-width: 1px;}
          .t{background-color: deepskyblue;border-width: 1px;}
      </style>
      <body id="9x9">
  
      </body>
      <script>
      let x = document.getElementById("9x9")
      let y = ""
      let num=[1,2,3,4,5,6,7,8,9]
  
      y+="<table>"
      y += "<tr><th class=t>x</th>"
  
      for (let i of num)
      {
          y+="<th class=t>"
          y+=i
          y+="</th>"
      }
      y+="</tr>"
  
      for (let i of num)
      {
          y+="<tr>"
          y+="<th class=t>"
          y+=i
          for (let j of num)
          {
              y+="<th>"
              y+=i*j
              y+="</th>"
          }
  
          y+="</tr>"
      }
      y+="</table>"
      x.innerHTML=y
      </script>
  </html>`
});

console.log('start at : http://127.0.0.1:8000')
await app.listen({ port: 8000 });