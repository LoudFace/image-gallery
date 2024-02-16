window.Webflow ||= [];
window.Webflow.push(() => {
  console.log('Mode switch');

  const darkTheme = Cookies.get('darkTheme');
  const pageWrapper = document.querySelector('.page-wrapper') as HTMLElement;
  const body = document.querySelector('body') as HTMLElement;
  const toggleWrap = document.querySelector('[lf-toggle="mode"]') as HTMLElement;

  function updateDarkTheme(enable: boolean) {
    if (enable) {
      pageWrapper.classList.add('dark-theme');
      body.style.backgroundColor = '#141414';
      body.style.color = '#fff';
    } else {
      pageWrapper.classList.remove('dark-theme');
      body.style.backgroundColor = '';
      body.style.color = '#141414';
    }
  }

  if (darkTheme === 'enabled') {
    updateDarkTheme(true);
  } else if (darkTheme === 'disabled') {
    updateDarkTheme(false);
  } else {
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    updateDarkTheme(mql.matches);
  }

  toggleWrap?.addEventListener('click', function () {
    const isDark = pageWrapper.classList.toggle('dark-theme');
    updateDarkTheme(isDark);
    //console.log(isDark);

    Cookies.set('darkTheme', isDark ? 'enabled' : 'disabled', { expires: 365 });
  });
});
