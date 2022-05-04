let ipMaskValidate = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/;

console.log("\n")
    console.log("127.0.0.1   ", ipMaskValidate.test("127.0.0.1"))
    console.log("8.8.8.8     ", ipMaskValidate.test("8.8.8.8"))
    console.log("192.168.0.62", ipMaskValidate.test("192.168.0.62"))

console.log("\n")
    console.log("192.168.0        ", ipMaskValidate.test("192.168.0"))
    console.log("192              ", ipMaskValidate.test("192"))
    console.log("192.168.1.fasdf  ", ipMaskValidate.test("192.168.1.fasdf"))
    console.log("192168062        ", ipMaskValidate.test("192168062"))