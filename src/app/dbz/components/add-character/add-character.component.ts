import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
	selector: 'dbz-add-character',
	templateUrl: './add-character.component.html',
	styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {
	@Output()
	public onNewCharacter: EventEmitter<Character> = new EventEmitter();

	public charater: Character = {
		name: '',
		power: 0
	};

	emitCharacter() {
		if (this.charater.name.length === 0) return;
		this.onNewCharacter.emit(this.charater);
		this.charater = { name: '', power: 0 };
	}
}
