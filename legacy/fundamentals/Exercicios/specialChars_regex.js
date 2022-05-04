let regex_numbers = /\d/; // \d representa qualquer dígito de caractere. É o mesmo que /[0-9]/
console.log('\nif only numbers - status:', regex_numbers.test("provalmente nenhum dos números 0, 309, 5, 12"))

let regex_string = /\w/; // apenas caracteres alfanumérico 'Números e Letras'
console.log('alpha Chars - status: ', regex_string.test("teste de script"))
console.log('alpha Chars - status: ', regex_string.test(""))

let regex_whiteSpace = /\s/; // true apenas se tiver espaço em branco.
console.log('White Space - status:', regex_whiteSpace.test('Sera que temos a ocorrencia neste paragrafo?'))
console.log('White Space - status:', regex_whiteSpace.test('Seraquetemosaocorrencianesteparagrafo?'))

 let regex_ifNotWhiteSpace = /S/;
 console.log('if not white Space - status:', regex_ifNotWhiteSpace.test('Seraquetemosaocorrencianesteparagrafo?'))
 console.log('if not white Space - status:', regex_ifNotWhiteSpace.test(' '))

 let regex_notABreakLine = /./; // Coringa aceita tudo!
console.log('O coringa - status: ', regex_notABreakLine.test('asdgggggr'))
console.log('O coringa - status: ', regex_notABreakLine.test(' '))
console.log('O coringa - status: ', regex_notABreakLine.test('135'))
console.log('O coringa - status: ', regex_notABreakLine.test('asdg986ggr'))

 
let regex_chars = /\D/; // Aceita caracteres menos números!
console.log('\nJust numbers - status: ', regex_chars.test("*asfasdd")) // percorre o parâmetro procurando por números, se tiver retorna false
console.log('Just numbers - status: ', regex_chars.test("*@."))
console.log('Just numbers - status: ', regex_chars.test(" "))
console.log('Just numbers - status: ', regex_chars.test("09865"))
console.log('Just numbers - status: ', regex_chars.test("*@9336."))