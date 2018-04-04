import { Injectable } from '@angular/core';





import {data} from '../../models/data/data';


@Injectable()
export class BaseRestService {



    // URL to web api
    constructor() {
        
    }


    getAllMenuList(): any{
   return  data
    }




}