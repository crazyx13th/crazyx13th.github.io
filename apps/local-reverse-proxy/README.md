# Local Reverse Proxy

running a local ngnix reverse proxy

## Initial todos

### modify hosts file

Windows:

- open `C:\Windows\System32\drivers\etc\hosts` as ADMIN
- check all "**urls**" fom `config/hosts.config.json` exists
- add missing entries

### get https certificate

#### install **CA** with **mkCert**

Windows:

- run `bin/mkcert-1.4.4/mkcert-windows-amd64.exe -install`

#### install **Cert** with **mkCert**

Windows:

- run (e.g. ... sync with "**certs**" fom `config/hosts.config.json`)
  ```
  bin\mkcert-1.4.4\mkcert-windows-amd64.exe      ^
          -key-file   config/certificate.key     ^
          -cert-file  config/certificate.pem     ^
                                local.jobrad.dev ^
           pto-peloton-ui-react.local.jobrad.dev ^
     pto-breakaway-ui-storybook.local.jobrad.dev
  ```

#### install **CA** at nodeJS

Windows:

- run `bin/mkcert-1.4.4/mkcert-windows-amd64.exe -CAROOT`
- run `setx NODE_EXTRA_CA_CERTS "<CAROOT>\\rootCA.pem`  
  (replace `<CAROOT>` with path you got before)


### modify nginx
- edit `docker/nginx.conf`
- recreate docker build
