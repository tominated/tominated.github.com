---
layout: post
title: Experimenting with my own CSS Reset
category: Code
comments: true
---

Just out of boredom today, I decided to make a sort of CSS reset for
myself. Technically it's more base styles than a reset seeing as it
has a lot of styling rather than just removing margins and padding.

I haven't really tested it (OK, so not at all tested it), but I thought
other people may like it. Here it is in it's uncompressed glory:

**EDIT:** I have tested it in Webkit and Gecko (chrome and firefox) and
it works beautifully. I have also made a preview page. You can check it out
[**here**](/reset_test.html).

{% highlight css %}
/*
 * Tom Brunoli's CSS Base Styles
 * Updated 2011-05-12
 * 
 * Licenced under Creative Commons Attribution-ShareAlike
 * http://creativecommons.org/licenses/by-sa/3.0/
 *
 */

/* Basics */
html, body                      { margin: 0; padding: 0; background: #efefef; color: #444; }
body, input, select, button,
textarea                        { font: 13px/24px "Helvetica Neue", Arial, sans-serif; }
body                            { overflow-y: scroll; }

p                               { margin: 0 0 24px 0; }
a                               { outline: none; }
a:focus                         { outline: 1px dotted invert; }
img                             { border: 0; }

/* Headings */
h1, h2, h3, h4, h5, h6          { margin: 0 0 24px 0; font-weight: bold; color: #222; }
h1                              { font-size: 24px; line-height: 24px; }
h2                              { font-size: 22px; line-height: 24px; }
h3                              { font-size: 20px; line-height: 24px; }
h4                              { font-size: 18px; line-height: 24px; }
h5, h6                          { font-size: 16px; line-height: 24px; }

/* Lists */
ul, ol                          { margin: 0 0 24px 0; padding: 0; }
ul ul, ul ol, ol ol, ol ul      { margin-left: 60px; margin-bottom: 0; }
ul                              { list-style: disc outside; }
ol                              { list-style: decimal outside; }

/* Quotes */
q, blockquote                   { font-family: Georgia, Times, serif; font-style: italic; }
blockquote                      { margin: 0 0 24px 0; padding: 0 0 0 20px;
                                  border-left: 4px solid #ccc; }

/* Code */
code, ol.code, pre              { font-family: Menlo, Monaco, Consolas, Courier;
                                  background: #222; color: #fefefe; font-size: 12px; }
pre, ol.code                    { padding: 24px; line-height: 18px;
                                  overflow: auto; list-style-position: outside; }
code                            { display: inline-block; padding: 0 6px; }
ol.code li                      { margin: 0 0 0 24px; white-space: pre; }

/* Tables */
table                           { width: 100%; margin-bottom: 24px;
                                  border-bottom: 2px solid #999; }
caption                         { line-height: 24px; margin-bottom: 12px; font-size: 18px;
                                  font-weight: bold; }
tbody, tr                       { margin: 0; padding: 0; }
th                              { border-bottom: 2px solid #999; }
td                              { padding: 2px 6px; }
tbody tr:nth-of-type(odd)       { background: #ddd; }

/* Forms */
form                            { margin-bottom: 24px; zoom: 1; }
form:before, form:after         { content: ""; display: table; } /* Clearfix */
form:after                      { clear: both; } /* Clearfix */
label                           { display: block; margin-bottom: 24px; }
input, button, textarea         { color: #444; background: #f9f9f9; border: 1px solid #999; }
input, button                   { height: 24px; float: left; margin-right: 12px;
                                  display: block; padding: 0 12px; }
textarea                        { display: block; padding: 12px; }
input[type=submit], button      { cursor: pointer; font-size: 11px; line-height: 18px; }
input:focus,
input[type=submit]:hover,
button:hover, textarea:focus    { background: #fff; border-color: #666; outline: none; }

/* HTML5 Elements */
article, hgroup, header, footer,
section, aside, nav, figure,
figcaption, video               { display: block; }
{% endhighlight %}

You can download a minified version [here](/downloads/reset.min.css). It's licensed under
the [Creative Commons Attribute-ShareAlike](http://creativecommons.org/licenses/by-sa/3.0/) licence.

Hopefully someone else can make use of it. I'd love to know if you do use it, so just submit a
comment (if disqus decides to work), or send me an email!