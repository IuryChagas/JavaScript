let selectBrand = /Marca: ?(Nike|Adidas|Puma|Asics)/;

console.log('\n *** Brands to find: Nike, Adidas, Puma, Asics ***\n')

console.log('selectBrand    ', selectBrand.test("selectBrand"));
console.log('Nike           ', selectBrand.test("Marca: Nike"));
console.log('New Balance    ', selectBrand.test("Marca: New Balance"));
console.log('Puma:          ', selectBrand.test("Marca:Puma"));
console.log('Adidas:        ', selectBrand.test("Marca:Adidas"));
console.log('Asics:         ', selectBrand.test("Marca: Asics"));
console.log('1549873:       ', selectBrand.test("Marca: 1549873"));
console.log('Marca:       ', selectBrand.test("Marca:"));
console.log('nIKE:       ', selectBrand.test("nIKE:"));
console.log('Marca: nIKE:       ', selectBrand.test("Marca: nIKE:"));
console.log('PUMA:       ', selectBrand.test("PUMA:"));
