let oneOrMultipleNumbers = /\d+/;

console.log('Status {54873}: ', oneOrMultipleNumbers.test('54873'))
console.log('Status {""}: ', oneOrMultipleNumbers.test(''))
console.log('Status {fjaskdflasjd245}: ', oneOrMultipleNumbers.test('fjaskdflasjd245'))
console.log('Status {fjaskdflasjd}: ', oneOrMultipleNumbers.test('fjaskdflasjd'))