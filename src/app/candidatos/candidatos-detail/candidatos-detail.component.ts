import { Component, OnInit, Input } from '@angular/core';
import { CandidatoService } from '../candidato.service';
import { ActivatedRoute } from '@angular/router';
import { CandidatoDetail } from './candidatos-detail';



@Component({
  selector: 'app-candidatos-detail',
  standalone: false,
  templateUrl: './candidatos-detail.component.html',
  styleUrl: './candidatos-detail.component.css'
})
export class CandidatosDetailComponent implements OnInit {
  @Input() candidato: any;

  candidatoId!: string;
  @Input() candidatoDetail!: CandidatoDetail;

  constructor(
    private route: ActivatedRoute,
    private candidatoService: CandidatoService
  ) {}

  getAuthor(){
    this.candidatoService.getcandidato(this.candidatoId).subscribe(apiData=>{
      this.candidatoDetail = apiData;
    })
  }

  ngOnInit() {
    if(this.candidatoDetail === undefined){
      this.candidatoId = this.route.snapshot.paramMap.get('id')!
      if (this.candidatoId) {
        this.getAuthor();
}
    }}}

  