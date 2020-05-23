import { serve } from "https://deno.land/std@0.52.0/http/server.ts";
const s = serve({ port: 8000 });
console.log("http://localhost:8000/");



const home = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
            <title>Test do Deno!</title>
            <style>
                body{
                    background-color : #111;
                }
                h1,p{
                    color: #fff;
                }
            </style>
        </head>
        <body>
            <h1>Deno é zica pai</h1>
            <p>salve quebrada aqui é zona leste caraiiii!!!</p>
        </body>
    </html>
  `



for await (const req of s) {

    switch (req.url) {
        case "/home": req.respond({ body: home });
            break;

            default: req.respond({ body: 'Type /home mothafoca rsrsrs' });

    }

}

