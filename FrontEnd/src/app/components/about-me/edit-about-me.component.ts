import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-edit-about-me',
  templateUrl: './edit-about-me.component.html',
})
export class EditAboutMeComponent implements OnInit {
  persona: persona = null;
  constructor(private activatedRouter: ActivatedRoute, private personaService: PersonaService, private router:Router) {}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.detail(id).subscribe(
      (data) => {
        this.persona = data;
      },
      (err) => {
        alert('Error al modificar experiencia.');
        this.router.navigate(['']);
      }
    );
  }

  onUpdate(){

  }
  uploadImage($event:any){
    
  }
}
