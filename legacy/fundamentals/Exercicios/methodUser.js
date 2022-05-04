let user = {
    user: '',
    setName: function(newUser){
        this.user = newUser;
    },
    getName: function(){
        return this.user;
    }
};

user.setName('Douglas');

console.log('\n Name: ', user.getName());