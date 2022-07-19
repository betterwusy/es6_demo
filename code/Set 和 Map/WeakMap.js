let myWeakmap = new WeakMap();

myWeakmap.set(
  document.getElementById('logo'),
  { timesClicked: 0 }
);

document.getElementById('logo')
  .addEventListener('click', () => {
    let logoData = myWeakmap.get(document.getElementById('logo'));
    logoData.timesClicked++;
  }, false);
