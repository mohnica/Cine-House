// Seu objetivo será criar 3 variáveis: "moduloNativo", "moduloInstalado" e "moduloProprio", onde cada uma armazenará um módulo distinto. A primeira deve requisitar o módulo http, a segunda o módulo axios e a terceira um módulo local exportado do arquivo minhaFuncao.js. Este arquivo se encontra na mesma pasta que o arquivo index.js.


let moduloNativo = require ("Http");
let moduloInstalado = require ("Axios");
let moduloProprio = require ("./minhaFuncao");
