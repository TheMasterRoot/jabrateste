import { init, RequestedBrowserTransport } from "../browser-esm";
import { log } from "./log.js";
import { webhidConsent } from "./webhid-consent";

async function sample() {
  try {
    /**
     * The Jabra JS library can be initialized with a configuration object.
     * The configuration allows you to:
     * - set app related keys and IDs
     * - set tracking level (defaults to no-tracking)
     * - request a transport mechanism
     * - supply a custom logger function
     *
     * All settings are optional.
     *
     * Setting the organizationKey, appId and appName will improve interoperability
     * with other Jabra software and popular softphone vendors such as Teams, Skype
     * and Zoom. Read more in the documentation:
     * https://developer.jabra.com/site/global/software/generation-3/developers-guide/initialize.gsp#Configure_the_library
     */
    const configuration = {
      partnerKey: "[get-from-developer-zone]",
      appId: "self-chosen-app-identifier",
      appName: "The Name of My App",
      tracking: "track-all",
      transport: RequestedBrowserTransport.WEB_HID,
      logger: {
        write(logEvent) {
          log(
            `            
              MESSAGE: ${logEvent.message}
              LEVEL: ${logEvent.level}
              LAYER: ${logEvent.layer}              
            `
          );
        }
      }
    };

    await init(configuration);
  } catch (err) {
    log(err.message);
  }
}

// Workaround for missing onload event in CodeSandbox
setTimeout(() => {
  sample();
  webhidConsent();
}, 3000);
