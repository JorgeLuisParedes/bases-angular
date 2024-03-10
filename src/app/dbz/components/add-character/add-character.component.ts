import { Component } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
	selector: 'dbz-add-character',
	templateUrl: './add-character.component.html',
	styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {
	public charater: Character = {
		name: '',
		power: 0
	};

	emitCharacter() {
		console.log(this.charater);

		this.charater.name = '';
		this.charater.power = 0;
	}
}
