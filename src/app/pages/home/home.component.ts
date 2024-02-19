import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { Open5Service } from '../../service/open5.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  constructor(private open5Service: Open5Service) { }
  ngOnInit() {
    this.open5Service.getAllClasses().subscribe((data) => {
      console.log(data);
    });
  }

  loadClasses() {
    this.open5Service.getAllClasses().subscribe((data) => {
      console.log(data);
    });
  }

  loadRaces() {
    this.open5Service.getAllRaces().subscribe((data) => {
      console.log(data);
    });
  }
}