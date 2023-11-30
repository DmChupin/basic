import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/common/header/header.component';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.less'],
	standalone: true,
	imports: [RouterOutlet, HeaderComponent],
})
export class AppComponent {
	title = 'basic';
}
