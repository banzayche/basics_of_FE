# DOM - document object model

HTML DOM - is a tree of objects parent "document -> html -> ..lots of childrens"

## Virtual DOM 
Virtual DOM is a part of react. It's an abstraction of HTML DOM. It's done on javascript intairly on computer memory.

React keeps two snapshots of HTML DOM and Virtual DOM and if there is any changes it says to Browser engine to re-render just a patch of HTML DOM not a whole tree.

#########################################################

# Virtual DOM

Virtual DOM is about avoiding unnecessary changes to the DOM, which are expensive performance-wise, because changes to the DOM usually cause re-rendering of the page. Virtual DOM also allows to collect several changes to be applied at once, so not every single change causes a re-render, but instead re-rendering only happens once after a set of changes was applied to the DOM.

# Shadow DOM

Shadow dom is mostly about encapsulation of the implementation. A single custom element can implement more-or-less complex logic combined with more-or-less complex DOM. An entire web application of arbitrary complexity can be added to a page by an import and <body><my-app></my-app> but also simpler reusable and composable components can be implemented as custom elements where the internal representation is hidden in the shadow DOM like <date-picker></date-picker>.

Style encapsulation Shadow DOM is also about preventing styles being applied accidentally to elements the designer didn't intend to, for example because the CSS or components library you are using changed a selector that now applies to other elements that use the same CSS class names. Styles added to components are scoped to that component and bleeding out or in of styles is prevented.

# Shadow DOM and performance

Even though shadow DOM is not about performance in the first place it also has performance implications. Because styles are scoped, the browser can make assumptions about some changes to affect only a limited area of the page (the shadow DOM of a custom element) which can limit re-rendering to the area of such a component, instead of re-rendering the entire page.

This is the reason the >>>, /deep/, and ::shadow CSS combinators, which allowed to apply styles across shadow DOM boundaries, were deprecated and are subject to be removed soon from Chrome (other browsers never had them AFAIK). The mere existence of these combinators prevents the kind of optimization mentioned in the previous paragraph.

# Angular2 uses the advantages of both worlds.

It uses unidirectional data flow and runs change detection on the model only. If it detects changes it causes the DOM to be updated by updating bindings and make structural directives like *ngFor, *ngIf, ... update the DOM. Therefore the DOM is only updated when the model actually changed.

Angular2 uses shadow DOM (only with ViewEncapsulation.Native which is currently not the default) to utilize style encapsulation capabilities provided by the browser, or (current default) just emulate style encapsulation by rewriting styles added to components, as a workaround until native shadow DOM and CSS variables (for dynamic global style changes) become widely available.