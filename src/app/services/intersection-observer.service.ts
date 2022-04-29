import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class IntersectionObserverService {
    public initializeIntersectionObserver(container: HTMLElement, selector: string): void {
        const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                const element: HTMLElement | null = entry.target as HTMLElement;
                if (!element || !entry.isIntersecting) return;

                element.classList.add('fade-in');

                observer.unobserve(element);
            });
        });

        this.observeElements(observer, container, selector);
    }

    private observeElements(observer: IntersectionObserver, container: HTMLElement, selector: string): void {
        const items: HTMLElement[] = Array.from(container.querySelectorAll(selector));
        items.forEach((item) => {
            observer.observe(item);
        });
    }
}
