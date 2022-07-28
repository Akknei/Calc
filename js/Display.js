class Display{
    constructor(displayValueBefore, displayValueActually){
        this.displayValueBefore = displayValueBefore;
        this.displayValueActually = displayValueActually;
        this.calculator = new Calculator();
        this.typeOperations = undefined;
        this.valueBefore = "";
        this.valueActually = "";
        this.signs = {
            addition: "+",
            subtraction: "-",
            multiplication: "x",
            division: "/"
        }
    }

    delete(){
        this.valueActually = this.valueActually.toString().slice(0,-1);
        this.printValues();
    }

    clearAll(){
        this.valueBefore = "";
        this.valueActually = "";
        this.typeOperations = undefined;
        this.printValues();
    }

    computing(type){
        this.typeOperations !== "equal" && this.calc();
        this.typeOperations = type;
        this.valueBefore = this.valueActually || this.valueBefore;
        this.valueActually = "";
        this.printValues();
    }

    addNumber(number){
        if(number === "." && this.valueActually.includes(".")) return
            this.valueActually += number.toString();
            this.printValues();
    }

    printValues(){
        this.displayValueActually.textContent = this.valueActually;
        this.displayValueBefore.textContent = `${this.valueBefore} ${this.signs[this.typeOperations] || ""}`;
    }

    calc(){
        const valueBefore = parseFloat(this.valueBefore);
        const valueActually = parseFloat(this.valueActually);

        if(isNaN(valueActually) || isNaN(valueBefore)) return
            this.valueActually = this.calculator[this.typeOperations](valueBefore, valueActually);
    }
}