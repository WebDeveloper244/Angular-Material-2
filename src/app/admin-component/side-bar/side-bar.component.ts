import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {
  @ViewChild('menuButton') menuButton:any| ElementRef;
  isSidenavClosed = false;
  panelOpenState = false;

  onSidenavClose() {
    this.isSidenavClosed = true;
    this.menuButton.nativeElement.classList.toggle('active');
  }
}
