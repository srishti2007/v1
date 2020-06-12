class Form{
    constructor(){
      this.name1 = createInput('name');  
      this.age = createInput('age');
      this.gender = createInput('gender');
      this.email = createInput('email Id');
      this.male = createRadio();
      this.female = createRadio();
      this.y1 = createRadio();
      this.y2 = createRadio();
      this.y3 = createRadio();
      this.y4 = createRadio();
      this.n1 = createRadio();
      this.n2 = createRadio();
      this.n3 = createRadio();
      this.n4 = createRadio();
      this.button = createButton('sumbit');
    }
    display(){

    this.name1.position(150, 65);

    this.age.position(150, 85);

    this.gender.position(150, 105);

    this.email.position(150, 125);

    this.male.option('male');
    this.male.position(190, 105);  

  
    this.female.option('female');
    this.female.position(240, 105);       

  
    this.y1.option('yes');
    this.y1.position(172, 263);

  
    this.y2.option('yes');
    this.y2.position(172, 345);

       
  
    this.y3.option('yes');
    this.y3.position(172, 427);
   
    
    this.y4.option('yes');
    this.y4.position(172, 510);

    
    this.n1.option('no');
    this.n1.position(222, 263);

    
    
    this.n2.option('no');
    this.n2.position(222, 345);

       
    
    this.n3.option('no');
    this.n3.position(222, 427);
   
    
    this.n4.option('no');
    this.n4.position(222, 510);


    var q1 = createElement('h3');
    q1.html(" Q1. Do you think we need to have free lunch meals in our school canteen for the kids who are very poor?");
    q1.position(10, 200);
    
    var q2 = createElement('h3');
    q2.html(" Q2. Would you be willing to contribute a small amount every month for such a program?");
    q2.position(10, 280);

    var q3 = createElement('h3');
    q3.html(" Q3. Do you think electronics should be allowed in school?");
    q3.position(10, 360);

    var q4 = createElement('h3');
    q4.html(" Q4. Do you think lunch breaks should be longer?");
    q4.position(10, 440);

    this.sumbit.position(10,550);
    this.sumbit.mousePressed(this.clearAll);

    }

    clearAll(){
        this.name1.hide();
        this.email.hide();
        this.age.hide();
        this.gender.hide();
        this.continuebutton.hide();
        this.q1.hide();
        this.q2.hide();
        this.q3.hide();
        this.q4.hide();
        this.n1.hide();
        this.n2.hide();
        this.n3.hide();
        this.n4.hide();
        this.y1.hide();
        this.y2.hide();
        this.y3.hide();
        this.y4.hide();
        this.male.hide();
        this.female.hide();
      }
}