function switchTab(e, tabNum) {
  tabContent = document.getElementsByClassName('tabContent');
  tabButton = document.getElementsByClassName('tabButton');

  let i;
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = 'none';
  }

  for (i = 0; i < tabButton.length; i++) {
    tabButton[i].className = tabButton[i].className.replace(' active', '');
  }

  document.getElementById(tabNum).style.display = 'block';
  e.currentTarget.className += ' active';
}
