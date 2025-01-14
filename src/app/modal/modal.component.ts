import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Output() close = new EventEmitter<void>();

  closeModal(): void {
    this.close.emit(); // 부모 컴포넌트에 이벤트 전달
  }
}
