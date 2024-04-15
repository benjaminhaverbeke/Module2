class Request {
    
    constructor(){
        
        this.inputTable = [];
        
        
        
    }
    
    getInputs(input){
        
        
        input.forEach((element)=> this.inputTable.push(element.value));
        
        return this.inputTable;
        
    }
    
}

export default Request;