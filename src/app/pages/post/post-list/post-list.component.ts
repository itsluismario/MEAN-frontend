// post-list.component.ts
import { Component, Input } from '@angular/core';
import {
  HlmAccordionContentComponent,
  HlmAccordionDirective,
  HlmAccordionIconDirective,
  HlmAccordionItemDirective,
  HlmAccordionTriggerDirective,
} from '@spartan-ng/ui-accordion-helm';
import { HlmIconComponent } from '@spartan-ng/ui-icon-helm';

interface Post {
  title: string;
  content: string;
  date: string;
}

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [
    HlmAccordionContentComponent,
    HlmAccordionDirective,
    HlmAccordionIconDirective,
    HlmAccordionItemDirective,
    HlmAccordionTriggerDirective,
    HlmIconComponent
  ],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent {
  @Input() posts:Post[] = [];
}
