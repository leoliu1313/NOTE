jquery

<selector>
"element"
".class"
"#id"

$(<selector>).show();
$(<selector>).hide();
$(<selector>).toggle();
$(<selector>).toggle(true);
$(<selector>).toggle(false);

// for most elements
$(<selector>).text();
$(<selector>).text(<new text>);
// for input elements
$(<selector>).val();
$(<selector>).val(<new val>);
$(<selector>).css(<attr>);
$(<selector>).css(<attr>, <new attr>);

$(<selector>).on(<even>, <function>);
$(<selector>).trigger(<even>);

var <function> = function () {
  // be careful $(this) and this refer to $(window), not object itself
  // function scope???
};
