import { Component, OnInit, DoCheck, OnChanges, EventEmitter, Output, ViewChild, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit , OnChanges {
 @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>()
 @Output() bluePrintAdded =new EventEmitter<{serverName: string, serverContent: string}>()
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput', {static: true}) serverContentInput
  constructor() { }

  ngOnChanges(changes: SimpleChanges){
    console.log(changes)
  }

  ngOnInit() {
    console.log("hello")
  }


  onAddServer(serverNameInput) {
    this.serverCreated.emit({
      serverName: serverNameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    })
  }
  onAddBluePrint(serverNameInput) {
    this.bluePrintAdded.emit({
      serverName: serverNameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    })
  }

  ngDoCheck(){
  }

}
