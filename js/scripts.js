$(function(){

  $("button#dog").click(function(){
    $("ul#doglist").prepend("<li>Woof-Woof!</li>");
    $("ul#doglist").prepend("<li>Awwoooooo!!!</li>");
    $("ul#doglist").prepend("<li>Throw me a friggin Bone!</li>");
    $("ul#catlist").prepend("<li>Meow- Biatch!</li>");
    $("ul#catlist").prepend("<li>Hissss!!!</li>");
    $("ul#catlist").prepend("<li>Feed me Ma'Fker!!</li>");
  });

  $("button#cat").click(function(){
    $("ul#catlist").prepend("<li>I'm sleeping fool.</li>");
    $("ul#catlist").prepend("<li>I'm sleeping fool.</li>");
    $("ul#catlist").prepend("<li>I'm sleeping fool.</li>");
    $("ul#doglist").prepend("<li>Wake up!</li>");
    $("ul#doglist").prepend("<li>You so Boring!</li>");
    $("ul#doglist").prepend("<li>You never do nothing!</li>");
    $("ul#catlist").prepend("<li>I stay warm, fat, and asleep; who's the idiot??</li>");
  });
});
