function switchTab(e, tabNum) {
  //gather an HTMLCollection of each tab button and tab content
  tabButton = document.getElementsByClassName('tabButton');
  tabContent = document.getElementsByClassName('tabContent');

  //set display: none on all tab content
  let i;
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = 'none';
  }

  //remove active property from all tabs
  for (i = 0; i < tabButton.length; i++) {
    tabButton[i].className = tabButton[i].className.replace(' active', '');
  }

  //get clicked tab, make it active and display its content
  document.getElementById(tabNum).style.display = 'block';
  e.currentTarget.className += ' active';
}
