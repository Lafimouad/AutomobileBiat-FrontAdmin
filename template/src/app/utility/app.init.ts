
import { KeycloakService } from 'keycloak-angular';

export function initializeKeycloak(keycloak: KeycloakService): () => Promise<boolean> {
    return () =>
        keycloak.init({
            config: {
                url: 'http://20.67.134.169:8080/auth',
                realm: 'credit-workflow',
                clientId: 'client',
            },
            // config: {
            //     url: 'http://localhost:8180/auth',
            //     realm: 'angular-web',
            //     clientId: 'angular-web-client',
            // },

            initOptions: {
                checkLoginIframe: true,
                checkLoginIframeInterval: 25
            },
            loadUserProfileAtStartUp: true
        });
}
