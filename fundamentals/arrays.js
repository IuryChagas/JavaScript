const values = [7.7, 8.9, 6.3, 9.2]
    console.log(`${values[0]} , ${values[3]}`); // usando Template strings para retornar os valores das posições do array 0 e 3!
    console.log(values[4]); // retornar valor não definido pois o array acima consta de 0 à 3 apenas.

values[4] = 5.6;
    console.log(values[4]);

values[11] = 9.7;
    console.log(values); // retorna o valor da posição 11 do array e deixa explícito que as posições 6 ao 10 estão vazias!

    console.log(values.length); // retorna o tamanho do array
    
    values.push({id: 3}, false, null, 'test'); // .push() incrementa mais posições no array
    console.log(values);

    console.log(values.pop()); // remove/retorna o dado da última posição do array
    
    delete values[0] //  remove a posição especificada do array, no caso o valor inicial 7.7
        console.log(values);

    console.log(typeof values); // retorna que o array é do tipo Object!