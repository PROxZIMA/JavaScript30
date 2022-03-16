const textShadowX = '--text-shadow-x';
const textShadowY = '--text-shadow-y';
// Offset from edge of the element
// If cursor is inside the boundry, shadow will move
const boundryOffset = 100;
const maxShadow = 15; // Max px of the shadow
const heading = document.querySelector('h1');
// Minimum and Maximum range of mouse movement to detect
// So that shadow doesn't move way to much
const [mix, max, miy, may] = [
  heading.offsetLeft - boundryOffset,
  heading.offsetLeft + boundryOffset + heading.offsetWidth,
  heading.offsetTop - boundryOffset,
  heading.offsetTop + boundryOffset + heading.offsetHeight
];

/**Scales val which belong to a range(OldMin, OldMax) to a new
 * range(NewMin, NewMax) such that it maintains the same ratio.
 *
 * @param {Number} OldMin
 * @param {Number} OldMax
 * @param {Number} NewMin
 * @param {Number} NewMax
 * @param {Number} val
 * @returns Scaled value
 */
const minmax = (OldMin, OldMax, NewMin, NewMax, val) => (((val - OldMin) * (NewMax - NewMin)) / (OldMax - OldMin)) + NewMin;

window.addEventListener('mousemove', e => {
  // Restrict the mouse movement to Minimum and Maximum values
  let [x, y] = [
    Math.min(max, Math.max(mix, e.clientX)),
    Math.min(may, Math.max(miy, e.clientY))
  ];
  // Scale the value to the new shadow range
  [x, y] = [
    minmax(mix, max, -maxShadow, maxShadow, x),
    minmax(miy, may, -maxShadow, maxShadow, y)
  ];
  document.documentElement.style.setProperty(textShadowX, `${x}px`);
  document.documentElement.style.setProperty(textShadowY, `${y}px`);
})
