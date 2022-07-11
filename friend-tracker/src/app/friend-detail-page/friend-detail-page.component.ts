import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from 'src/types';
import { friendsData } from '../data';

@Component({
  selector: 'app-friend-detail-page',
  templateUrl: './friend-detail-page.component.html',
  styleUrls: ['./friend-detail-page.component.css']
})
export class FriendDetailPageComponent implements OnInit {
  selectedPerson: Person | undefined = undefined;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const friendId = this.route.snapshot.paramMap.get('friendId')
    this.selectedPerson = friendsData.find(friend => friendId === friend.id)
    console.log(this.selectedPerson)
  }

}
