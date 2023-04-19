import {
	Directive,
	OnChanges,
	OnDestroy,
	OnInit,
	ViewContainerRef,
	TemplateRef,
	Input,
	SimpleChanges,
} from '@angular/core';
import { BehaviorSubject, Subject, map, takeUntil } from 'rxjs';
interface ICarouselContext<T> {
	$implicit: T;
	next: () => void;
	back: () => void;
	appCarousel: T[] | undefined;
	appCarouselVisibility: boolean | undefined;
}
@Directive({
	selector: '[appCarousel]',
})
export class CarouselDirective<T> implements OnChanges, OnDestroy, OnInit {
	@Input() appCarousel: T[] | undefined;
	@Input() appCarouselVisibility: boolean | undefined;

	private readonly currentIndex$ = new BehaviorSubject<number>(0);
	private destroy$ = new Subject<void>();

	constructor(private viewContainerRef: ViewContainerRef, private templateRef: TemplateRef<ICarouselContext<T>>) {}

	ngOnChanges(changes: SimpleChanges) {
		console.log('changes = ', changes);

		this.updateView();
	}

	ngOnInit(): void {
		this.listenCurrentIndexChange();
	}

	ngOnDestroy(): void {
		this.destroy$.next();
	}

	private updateView() {
		if (!this.appCarousel?.length) {
			this.viewContainerRef.clear();
			return;
		}
		this.currentIndex$.next(0);
	}

	private listenCurrentIndexChange() {
		this.currentIndex$
			.pipe(
				map(currentIndex => this.getCurrentContext(currentIndex)),
				takeUntil(this.destroy$),
			)
			.subscribe(context => {
				this.viewContainerRef.clear();
				this.viewContainerRef.createEmbeddedView(this.templateRef, context);
			});
	}

	private getCurrentContext(currentIndex: number): ICarouselContext<T> {
		return {
			$implicit: (this.appCarousel as T[])[currentIndex],
			appCarousel: this.appCarousel,
			appCarouselVisibility: this.appCarouselVisibility,
			next: () => {
				this.next();
			},
			back: () => {
				this.back();
			},
		};
	}
	private next() {
		const nextIndex = this.currentIndex$.value + 1;
		const newIndex = nextIndex < (this.appCarousel as T[]).length ? nextIndex : 0;

		this.currentIndex$.next(newIndex);
	}

	private back() {
		const previousIndex = this.currentIndex$.value - 1;
		const newIndex = previousIndex >= 0 ? previousIndex : (this.appCarousel as T[]).length - 1;

		this.currentIndex$.next(newIndex);
	}
}
