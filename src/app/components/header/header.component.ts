import {Component, OnDestroy, Renderer2} from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnDestroy {
    public headerClass: string = '';

    private destroyScrollListener!: () => void;
    private scrollTop!: number;

    public constructor(private renderer2: Renderer2) {
        this.initializeScrollListener();
    }

    public ngOnDestroy(): void {
        this.destroyScrollListener();
    }

    private initializeScrollListener(): void {
        this.destroyScrollListener = this.renderer2.listen('window', 'scroll', (e) => {
            const scrollingElement = (e.target as Document)?.scrollingElement;
            if (!scrollingElement) return;

            this.scrollHandler(scrollingElement.scrollTop);
        });
    }

    private scrollHandler(scrollTop: number): void {
        if (scrollTop > this.scrollTop) {
            this.headerClass = 'fade-out';
        } else if (scrollTop !== 0) {
            this.headerClass = 'fade-in';
        } else {
            this.headerClass = '';
        }

        this.scrollTop = scrollTop;
    }
}
