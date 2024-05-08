import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EducationComponent } from './education/education.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { TrainingComponent } from './training/training.component';
import { ReferencesComponent } from './references/references.component';
import { SkillsCertificationComponent } from './training/skills-certification/skills-certification.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HomeComponent, PersonalInfoComponent, EducationComponent, WorkExperienceComponent, TrainingComponent, SkillsCertificationComponent, ReferencesComponent]
})
export class AppComponent {
  title = 'first-project';
}
