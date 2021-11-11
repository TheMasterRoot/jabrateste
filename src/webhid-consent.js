import { webHidPairing } from "../browser-esm";

/**
 * Inject a WebHID consent button on the page to allow
 * the browser to access connected Jabra devices
 */
export function webhidConsent() {
  const button = document.createElement("button");
  button.innerText = "WebHID Consent";
  button.onclick = async () => {
    await webHidPairing();
  };

  document.body.prepend(button);
}
