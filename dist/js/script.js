var scenery_landscape = document.getElementById("scenery__landscape");

var size_classes = ["size-px", "size-0.5"];

var size_classes_length = size_classes.length;

var box_shadow_blur_maximum = 5;

var animation_duration_minimum = 5,
  animation_duration_maximum = 30;

var i = 0,
  len = 500;

while (i < len) {
  var div = document.createElement("div");

  var size_class =
    size_classes[Math.floor(Math.random() * size_classes_length)];

  div.classList.add(
    "star",
    "absolute",
    size_class,
    "rounded-full",
    "bg-white",
    "blink",
  );

  div.style.top = Math.floor(Math.random() * 101) + "%";
  div.style.left = Math.floor(Math.random() * 101) + "%";

  var box_shadow_blur = Math.floor(
    Math.random() * (box_shadow_blur_maximum + 1),
  );
  var box_shadow_spread = Math.round(Math.random());
  var box_shadow_color_alpha = Math.floor(Math.random() * 101) / 100;

  if (
    box_shadow_blur != 0 &&
    box_shadow_spread != 0 &&
    box_shadow_color_alpha != 0
  ) {
    div.style.boxShadow =
      "0px 0px " +
      box_shadow_blur +
      "px " +
      box_shadow_spread +
      "px rgba(255, 255, 255, " +
      box_shadow_color_alpha +
      ")";
  }

  var animation_duration = Math.floor(
    Math.random() *
      (animation_duration_maximum - animation_duration_minimum + 1) +
      animation_duration_minimum,
  );

  div.style.animationDuration = animation_duration + "s";

  var neg_animation_duration = -Math.abs(animation_duration);

  div.style.animationDelay =
    Math.floor(
      Math.random() * (animation_duration - neg_animation_duration + 1) +
        neg_animation_duration,
    ) + "s";

  scenery_landscape.appendChild(div);

  i++;
}
