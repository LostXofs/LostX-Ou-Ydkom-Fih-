// Sidebar interaction: show related options
  document.querySelectorAll('.sidebar-item').forEach(item => {
    item.addEventListener('click', () => {
      // Update active state
      document.querySelectorAll('.sidebar-item').forEach(i => i.classList.remove('active'));
      item.classList.add('active');

      // Show corresponding options and hide others
      const sectionId = item.dataset.section;
      document.querySelectorAll('.menu-content').forEach(content => {
        content.classList.add('hidden');
      });
      document.getElementById(sectionId).classList.remove('hidden');
    });
  });

  // Switch toggle interaction
  document.querySelectorAll('.switch').forEach(switchEl => {
    switchEl.addEventListener('click', () => {
      switchEl.classList.toggle('active');


  function speedFunction() {
  alert("Speed increased!");
}

function speedFunction2() {
  alert("Speed decreased!");
}

function zoomIn() {
  alert("Sniper zoomed in!");
}

function zoomOut() {
  alert("Sniper zoomed out!");
}
