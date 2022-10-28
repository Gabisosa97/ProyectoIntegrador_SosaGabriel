import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
})
export class EditExperienciaComponent implements OnInit {
  xpLab: Experiencia = null;
  titulo: string = '';
  descripcion: string = 'asd';
  constructor(
    private xpService: ExperienciaService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.xpService.detail(id).subscribe(
      (data) => {
        this.xpLab = data;
      },
      (err) => {
        alert('Erorr al modificar experiencia.');
        console.log('hace algo lcdtm');
        this.router.navigate(['']);
      }
    );

    this.xpService.update(id, this.xpLab).subscribe(
      (data) => {
        this.router.navigate(['']);
      },
      (err) => {
        alert('Erorr al modificar experiencia.');
        this.router.navigate(['']);
      }
    );
  }
}
