import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';

@Component({
    selector: 'app-hero',
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements AfterViewInit {
    @ViewChild('section') private section!: ElementRef<HTMLElement>;

    private observer!: IntersectionObserver;

    public ngAfterViewInit(): void {
        this.initializeIntersectionObserver();
    }

    private initializeIntersectionObserver(): void {
        this.observer = new IntersectionObserver(
            (entries: IntersectionObserverEntry[]) => {
                entries.forEach((entry) => {
                    const element: HTMLElement | null = entry.target as HTMLElement;
                    if (!element || !entry.isIntersecting) return;

                    element.classList.add('fade-in');

                    this.observer.unobserve(element);
                });
            },
            {
                threshold: 0,
            }
        );

        this.observeElements();
    }

    private observeElements(): void {
        const items: HTMLElement[] = Array.from(
            this.section.nativeElement.querySelectorAll('.watermark, .line, p, .button')
        );
        items.forEach((item) => {
            this.observer.observe(item);
        });
    }
}
