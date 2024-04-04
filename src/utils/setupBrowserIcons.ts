export default function setupBrowserIcons() {
  const lightSchemeIcon: any = document.querySelector("link#light-scheme-icon");
  const darkSchemeIcon: any = document.querySelector("link#dark-scheme-icon");

  function setLight() {
    document.head.append(lightSchemeIcon);
    darkSchemeIcon.remove();
  }

  function setDark() {
    lightSchemeIcon.remove();
    document.head.append(darkSchemeIcon);
  }

  const matcher = window.matchMedia("(prefers-color-scheme:dark)");

  function onUpdate() {
    if (matcher.matches) {
      setDark();
    } else {
      setLight();
    }
  }

  matcher.addEventListener("change", () => onUpdate());

  onUpdate();
}