export class Termsconditions {
    public heading: string;
    public checkboxcontent: string;
    public paragraphs:  Array<string>;

    
    constructor(input) {
        this.heading = input.titel;
        this.paragraphs = input.beskrivelse;
        this.checkboxcontent = input.checkbox;
    }
}
