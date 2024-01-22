## Flex Box

Flexbox, or the Flexible Box Layout, is a CSS layout model that allows you to design complex layouts more efficiently and with less code. It is particularly useful for creating responsive and dynamic user interfaces.

### 1. Flex Container:

A container with the display: flex or display: inline-flex property becomes a flex container, and its direct children become flex items.

```css
.container {
	display: flex;
}
```

### 2. Flex Direction:

Defines the primary axis of the flex container, determining the direction in which flex items are placed.

1. row: Items are placed in the horizontal direction (default).
2. column: Items are placed in the vertical direction.

```css
.container {
	display: flex;
	flex-direction: row; /* or column */
}
```

### 3. Flex Items:

The children of a flex container become flex items.

```css
.item {
	/* Styles for flex items */
}
```

### 4. Justify Content:

Aligns flex items along the main axis (horizontal for row and vertical for column).

1. flex-start: Items are packed toward the start of the main axis.
2. flex-end: Items are packed toward the end of the main axis.
3. center: Items are centered along the main axis.
4. space-between: Items are evenly distributed with the first item at the start and the last item at the end.
5. space-around: Items are evenly distributed with equal space around them.

```css
.container {
	display: flex;
	justify-content: center; /* or flex-start, flex-end, space-between, space-around */
}
```

### 5. Align Items:

Aligns flex items along the cross axis (opposite to the main axis).

1. flex-start: Items are aligned to the start of the cross axis.
2. flex-end: Items are aligned to the end of the cross axis.
3. center: Items are centered along the cross axis.
4. baseline: Items are aligned based on their baseline.
5. stretch: Items are stretched to fill the container.

### 6. Flex Wrap:

Determines whether flex items should wrap onto multiple lines if they don't fit in a single line.

1. nowrap: All flex items are on one line (default).
2. wrap: Flex items wrap onto multiple lines if needed.

```css
.container {
	display: flex;
	flex-wrap: wrap; /* or nowrap */
}
```
