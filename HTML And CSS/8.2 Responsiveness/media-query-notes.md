1. What is a Media Query?

   - A media query is a CSS technique that allows you to apply different styles to a webpage based on certain conditions, such as the size of the screen.

2. When to Use Media Queries?

- Use media queries when you want your webpage to adapt its layout or styling based on the characteristics of the device it's being viewed on.

3. Syntax:

- Media queries are written using the @media rule in CSS.
- Example: Applying styles only when the screen width is 600 pixels or wider.

```css
@media screen and (min-width: 600px) {
	/* Styles go here */
}
```

4. Common Features:

- `min-width` and `max-width`: Specify a range of screen widths.
- `min-height` and `max-height`: Specify a range of screen heights.
- `orientation`: Apply styles based on the orientation of the device (landscape or portrait).
- `screen`, `print`, `speech`: Specify the type of media (e.g., screen for display screens, print for printed pages).

5. Example: Responsive Design for Mobile and Desktop:

```css
@media screen and (max-width: 600px) {
	body {
		font-size: 14px;
	}
}

@media screen and (min-width: 601px) {
	body {
		font-size: 16px;
	}
}
```

6. Using Multiple Conditions:

- Combine conditions using `and` and `or` to create more complex queries.

```css
@media screen and (min-width: 600px) and (orientation: landscape) {
	/* Styles for landscape view on screens wider than 600px */
}
```

7. Viewport Units:

- Use viewport units (vw, vh, vmin, vmax) to make styles more responsive to the viewport size.

```css
@media screen and (max-width: 600px) {
	font-size: 4vw;
}
```
