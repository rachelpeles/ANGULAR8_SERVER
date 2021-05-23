import { Component, OnInit } from '@angular/core';
import {Role,RoleService} from '../../services/role-service'
import {Worker,WorkersService} from '../../services/workers-service'
@Component({
  selector: 'app-my-roles',
  templateUrl: './my-roles.component.html',
  styleUrls: ['./my-roles.component.css']
})
export class MyRolesComponent implements OnInit {
  roles:Role[]=[];
  workers:Worker[]=[];
  rolesSalarys:number[]=[];
  constructor(private roleService:RoleService,private workerService:WorkersService) {
    this.roleService.getRoles()
    .subscribe((roles)=>this.roles=roles);
    this.workerService.getWorkers()
    .subscribe((workers)=>this.workers=workers);
   
   }
   //מקבל שם תפקיד ומחזיר ממוצע  עבורו
   avgSalarys(role:number) {
      let sum:number=0;
      let count:number=0;
      this.workers.forEach(w => {
        if(w.role==role){
            count++;
            sum+=w.salary;
        }
      });
    return sum/count;
      
   }
  ngOnInit(): void {
  }

}
