class CalcController {
    constructor(){
        this._locale = 'pt-BR';
        this._displayCalcEl = document.querySelector('#display');
        this._dateEl = document.querySelector('#data');
        this._timeEl = document.querySelector('#hora');

        // this._displayCalc = "0"; // encapsulamento de forma '_private'!
        this._currentDate;
        this.initialize();

        this.initButtonsEvents();
    }

    initialize(){
            
        this.setDisplayDateTime();

        setInterval(() => {
            
            this.setDisplayDateTime();

        }, 1000);
    }

    initButtonsEvents(){
      let buttons = document.querySelectorAll('#buttons > g, #parts > g');
        // buttons vai ser monitorado por addEventListener do qual recebe ao menos dois parâmetros!
        buttons.forEach((btn, index) => {
            btn.addEventListener('click', e => {
                console.log(btn.className.baseVal.replace("btn-"," "));
            });
        });
    }
// métodos getters e setters

    setDisplayDateTime(){
        this.displayDate = this.currentDate.toLocaleDateString(this._locale, {
            day: '2-digit',
            month: 'short',
            year: 'numeric'
        });
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
    }

    get displayTime(){
        return this._timeEl.innerHTML;
    }
    set displayTime(value){
        return this._timeEl.innerHTML = value;
    }
    get displayDate(){
        return this._dateEl.innerHTML;
    }
    set displayDate(value){
        return this._dateEl.innerHTML = value;
    }
    get displayCalc(){
        return this._displayCalcEl.innerHTML;
    }
    
    set displayCalc(value){
        this._displayCalcEl.innerHTML = value;
    }

    get currentDate(){
        return new Date();
    }

    set currentDate(value){
        this._currentDate = value;
    }

}
