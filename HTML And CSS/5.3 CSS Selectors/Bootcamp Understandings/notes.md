### Types of CSS Selectors:

1. **Element Selector (`element`):**

   - Targets HTML elements directly by their tag name.
   - Example: `p` targets all `<p>` paragraphs on the page.

```css
/* Style all paragraphs */
p {
	color: blue;
}
```

2. **Class Selector (`.class`):**

   - Targets elements with a specific class attribute.
   - Example: `.highlight` targets all elements with `class="highlight"`.

```css
/* Style elements with class="highlight" */
.highlight {
	background-color: yellow;
}
```

3. **ID Selector (`#id`):**

   - Targets a single element with a specific ID attribute.
   - Example: `#header` targets the element with `id="header"`.

```css
/* Style the element with id="header" */
#header {
	font-size: 24px;
}
```

4. **Descendant Selector (`ancestor descendant`):**

   - Targets elements that are descendants of a specified ancestor.
   - Example: `ul li` targets all `<li>` items inside a `<ul>` list.

```css
/* Style links with class="nav-link" inside a nav element */
nav .nav-link {
	text-decoration: none;
}

/* Style list items inside unordered lists */
ul li {
	list-style-type: square;
}
```

5. **Child Selector (`parent > child`):**

   - Targets direct children of a specified parent.
   - Example: `nav > ul` targets `<ul>` elements that are direct children of a `<nav>`.

```css
/* Style direct children of the nav element */
nav > ul {
	margin: 0;
}
```

6. **Attribute Selector (`[attribute=value]`):**
   - Targets elements with a specific attribute and value.
   - Example: `[type="submit"]` targets all elements with `type="submit"`.

```css
/* Style input elements with type="text" */
input[type="text"] {
	border: 1px solid #ccc;
}
```

### How They Work:

- CSS selectors help browsers identify which HTML elements to style.
- They're written in rules that pair a selector with styling instructions.
- Styles applied to more specific selectors override less specific ones.
