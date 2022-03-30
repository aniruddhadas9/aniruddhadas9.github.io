import { Injectable } from '@angular/core';
import {Project} from "../interfaces/project";

@Injectable({
  providedIn: 'root'
})
export class ResumeDataService {

  projects: Array<Project> = [];
  constructor() { }
}
