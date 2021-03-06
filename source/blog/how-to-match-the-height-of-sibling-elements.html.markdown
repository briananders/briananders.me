---
title: How to Match the Height of Sibling Elements
description: This is a very common CSS problem. How do you get an element to match the height of its sibling element?
date: 2014-11-18
tags: Code
author: Brian Anders
published: true
---

<style>
  .example-container {
    overflow: hidden;
    margin-top: 1em;
  }
  .tall {
    border-top: 5px solid #FFA700;
  }
  .column-1 {
    background: #2C2C2C;
  }
  .column-2 {
    background: #2F2F2F;
  }
  .column-3 {
    background: #3A3A3A;
  }
  .column-1, .column-2, .column-3 {
    padding-bottom: 99999px;
    margin-bottom: -99999px;
    float: left;
  }
  .example-1 .column-1, .example-1 .column-2 {
    width: 50%;
  }
  .example-2 .column-1, .example-2 .column-2, .example-2 .column-3 {
    width: 33.33333%;
  }
  ul {
    margin: 0;
    padding-top: 1em;
    padding-bottom: 1em;
    list-style: none;
    padding-left: 0;
    text-align: center;
  }
</style>


This is a very common CSS problem. How do you get an element to match the height of its sibling element? There is one solution[READMORE] where you use a container element and a repeating background image to create a divider. I have another solution here that is all CSS.

The difficult part of matching siblings without setting a height is this: what if you have dynamic content and one elements content is longer than the others?

If you make the bottom padding on all of the sibling elements incredibly large with the same amount of negative margin on the bottom, they cancel out. But through some strange CSS logic, the siblings will match eachothers height.

Disregarding the styling for color and width, this is the code I'm using to match the elements' heights below.


    <style text="text/style">
      .example-container {
        overflow: hidden;
      }
      .column-1, .column-2, .column-3 {
        padding-bottom: 99999px;
        margin-bottom: -99999px;
        float: left;
      }
    </style>


<div class="example-container example-1">
  <div class="column-1 tall">
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
    </ul>
  </div>
  <div class="column-2">
    <ul>
      <li>1</li>
      <li>2</li>
    </ul>
  </div>
</div>

<div class="example-container example-1">
  <div class="column-1">
    <ul>
      <li>1</li>
      <li>2</li>
    </ul>
  </div>
  <div class="column-2 tall">
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
    </ul>
  </div>
</div>


It works with any number of columns. Here I have 3 columns. For the sites that have two side bars and a main column. Because the container element has `overflow: hidden` the columns extend 10000 pixels outside of their content, but the container shows the content and hides all of the padding.


<div class="example-container example-2">
  <div class="column-1 tall">
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
    </ul>
  </div>
  <div class="column-2">
    <ul>
      <li>1</li>
      <li>2</li>
    </ul>
  </div>
  <div class="column-3">
    <ul>
      <li>1</li>
      <li>2</li>
    </ul>
  </div>
</div>

<div class="example-container example-2">
  <div class="column-1">
    <ul>
      <li>1</li>
      <li>2</li>
    </ul>
  </div>
  <div class="column-2 tall">
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
    </ul>
  </div>
  <div class="column-3">
    <ul>
      <li>1</li>
      <li>2</li>
    </ul>
  </div>
</div>

<div class="example-container example-2">
  <div class="column-1">
    <ul>
      <li>1</li>
      <li>2</li>
    </ul>
  </div>
  <div class="column-2">
    <ul>
      <li>1</li>
      <li>2</li>
    </ul>
  </div>
  <div class="column-3 tall">
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
    </ul>
  </div>
</div>


If you use this though, you will have to check your browsers. In my limited testing, it works on all of the major browsers including Internet Explorer 8 and up.
