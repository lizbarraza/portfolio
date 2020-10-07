# Portfolio for Liz

## Setup

Pull the repository and run `npm install` to install dependencies.

To start a local development server, run `gatsby develop`. By default you can access the site at http://localhost:8000

## Structure

All content files are [MDX](https://github.com/mdx-js/mdx), which means you can use [markdown syntax](https://www.markdownguide.org/basic-syntax/) and also react components.

Content for pages is in `src/pages` and case studies is in `src/case-studies`.

### Notes

- You cannot use indentation for nesting react components in MDX or gatsby does not compile the MDX correctly.
- A newline is needed around each React component opening/closing tag, or the MDX fails to compile.

## Components available for use in markdown

These components are located in `src/components/elements`.

- **`<CaseStudyHeader title="my-title" subtitle="my-subtitle" backgroundColor="hexCode" />`**

  Creates the page header block for a case study

- **`<ScrollableImage src="path-to-image" />`**

  Creates a scrollable image inside a laptop frame, used to display a full length website screenshot. Can contain an optional `full-width` prop to make it span the full content width.

- **`<TextColumns>...</TextColumns>`**

  Contains multiple columns of text (currently fixed at three columns). Place `<TextColumn>` tags inside, containing each column.

- **`<TwoColumns>...</TwoColumns>`**

  Creates two full-width columns of content. Can contain `<TwoColumnsImage src="path-to-image">` and `<TwoColumnsText>` for each column. `<TwoColumnsText>` can have an optional `reduced-padding` prop for a lower content padding.

- **`<StickyNavigation>...</StickyNavigation>`**

  Can contain multiple `<StickyNavigationSection name="name-displayed-in-nav">` elements, each containing the section content. A navigation menu is displayed with an item for each section. TODO: the navigation should stick to the top of the page when the user is viewing its sections and highlight the item for the section that is currently in view.
