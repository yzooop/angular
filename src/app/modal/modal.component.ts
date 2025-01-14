import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

export class ModalComponent {
  @Input() title: string = "";
  @Input() content: string = "";

  @Output() close = new EventEmitter<void>();

  closeModal() {
    this.close.emit();
  }
}
