const func = []
for (var fc = 0; fc < 10; fc++){
    func.push(function(){
        console.log(fc);
    });
};
func[3]();
func[8]();
func[0]();

/**
 * Devido a palavra reservada 'VAR' não ter escopo de bloco, o resultado será sempre o mesmo!
 */