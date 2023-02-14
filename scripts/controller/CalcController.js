class CalcController{

    constructor(){
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._currentDate;
        this.initialize()
    }

    initialize(){
        this._dateEl.innerHTML = "01/05/2020";
        this._timeEl.innerHTML = "00:00";
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
        this.currentDate = value;
    }
};