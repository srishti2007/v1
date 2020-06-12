class User{
    constructor(){
        this.name1 = null;
        this.emailId = null;
        this.age = null;
    }
    update(){
      var playerIndex = this.name1;
      database.ref(playerIndex).set({
          name : this.name1,
          age : this.age,
          emailId : this.emailId
      });

    }
}