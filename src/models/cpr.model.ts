export class Cpr {
    public heading: string;
    public continue: string;
    public gotonemid: string;
    public savemycpr:string;
    public cprlabel:string;
    public errormessage: string;
    public cprvalidation: string;
    public paragraphs:  Array<string>;

    
    constructor(cprdata) {
        this.heading = cprdata.heading;
        this.paragraphs = cprdata.paragraphs;
        this.continue = cprdata.continue;
        this.gotonemid = cprdata.gotonemid;
        this.cprvalidation = cprdata.cprvalidation;
        this.errormessage = cprdata.errormessage;
        this.savemycpr = cprdata.savemycpr;
        this.cprlabel = cprdata.cprlabel;
    }
}


