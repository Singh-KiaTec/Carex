import { Component, Input, ViewChild, ViewChildren } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { Slides } from 'ionic-angular';
import { Checkbox } from '../../../node_modules/ionic-angular/umd';
import { checkAndUpdateElementDynamic } from '../../../node_modules/@angular/core/src/view/element';
import { AsyncPipe } from '../../../node_modules/@angular/common';



@Component({
    selector: 'questionaire-viewer',
    templateUrl: 'questionaire.html'
})
export class QuestionaireComponent {

    private questionsForm: FormGroup;
    private questionsData;
    private items: FormArray;
    @ViewChild('questionForm') questionForm;
    @Input() questions: any;
    @ViewChildren('checkbox') Checkbox;
    @ViewChild(Slides) slides: Slides;
    private checkboxgroup;
    constructor(private formBuilder: FormBuilder) {

    }


    ngOnInit() {
        console.log("in questionaire");
        this.questionsData = this.questions;
        this.createForm();
    }

    ngAfterViewInit() {
        //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        //Add 'implements AfterViewInit' to the class.

    }
    createForm() {
        this.questionsForm = this.formBuilder.group({
            firstName: new FormControl(),
            items: this.formBuilder.array([])
        });
        this.addItem();
    }

    addItem(): void {

        this.items = this.questionsForm.get('items') as FormArray;
        for (var i = 0; i < this.questionsData.length; i++) {
            this.items.push(this.createDynamicForm(this.questionsData[i]));

        }
        console.log(this.questionsForm);
    }
    createDynamicForm(item): FormGroup {
        console.log(item);
        return this.formBuilder.group({
            label: item.label,
            checkboxlist: [item.dropdownlist]
        });
    }
    updateQuestionaire(item, dropdownitem, event) {
        let ischecked = dropdownitem.checked=="false" || dropdownitem.checked==false ? true : false;
       
        if (ischecked) {
            // console.log(item)
            // console.log(event);

            // console.log(dropdownitem.label);
            // let ischecked = ischecked;
            let selectedQuestion = item.label;
            var filtereditem = [];
            let checkboxitem;

            checkboxitem = item.value.checkboxlist.map((item, index) => {
                return this.Checkbox._results.filter(x => x._elementRef.nativeElement.id == item.label)[0];

            });

            //console.log(checkboxitem);
            this.checkboxgroup = checkboxitem;
            if (checkboxitem) {
                setTimeout(() => {
                    this.prepareCheckbox(item, dropdownitem.label);
                }, 50);
            }


        }
        // event.preventDefault();

    }
    prepareCheckbox(selecteditem, selectedcheckbox) {
        var element: any;
        console.log(selecteditem);
        selecteditem.value.checkboxlist.map((item, index)=>{
           if(item.label == selectedcheckbox){
               item.checked = true;
           }
           else{
               item.checked = false;
           }
        });
        // selecteditem.controls.checkboxlist.value.map((item, index)=>{
        //     if(item.label == selectedcheckbox){
        //         item.checked = true;
        //     }
        //     else{
        //         item.checked = false;
        //     }
        //  });
        // console.log("in prepare");
        // item.value.checkboxlist.map((item, index) => {
        //     this.Checkbox._results.filter(x => {
        //         if (x._elementRef.nativeElement.id == item.label) {
        //             //   this.checkboxgroup[i].checked = true;
        //             item.checked = true;

        //         }
        //         else {

        //             item.checked = false;

        //         }
        //     });
            // for (var i = 0; i < this.checkboxgroup.length; i++) {
            //     element = this.checkboxgroup[i];

            //     if (element._elementRef.nativeElement.id == selectedcheckbox) {

            //         this.checkboxgroup[i].checked = true;


            //     } else {

            //         this.checkboxgroup[i].checked = false;

            //     }
            //    // this.Checkbox.filter(x => x._elementRef.nativeElement.id == selectedcheckbox)[0] = this.checkboxgroup[i];
            // }
          //  console.log(this.items);


            //    let see =  ;
            //    console.log(see);
            //  this.detailsForm.controls.items.value.filter(x => x.name == selected_item)[0] = item;
            // let currentIndex = this.slides.getActiveIndex();
            // console.log(currentIndex);
            // setTimeout(() => {
            //     this.slides.slideNext();
            // }, 50);
            this.slides.slideNext();
            //this.navigatetoSlide();
    //    });
    // navigatetoSlide(event) {
    //             event.preventDefault();
    //             // let currentIndex = this.slides.getActiveIndex();
    //             // console.log(currentIndex);
    //             // let next = currentIndex + 1;
    //             // console.log(next);
    //             this.slides.slidePrev();
    //         }
}   
}
