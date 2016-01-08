# GnreInjector by basico.com

This app is an automated form filler using Selenium and Chromedriver to quickly resolve the GNRE burocratic form which nows must be filled and paid for every Brazilian order which Ships to others States in the Country.

The complicated thing is that every State has its own Flow. As Selenium should never fail (or it will raise an exception and block the execution), we had to analyze each flow and make sure that every field is correctly accessed and filled at the right time.

Also, the GNRE website is under current movement, so we cannot predict until when this solution presented on this repository will be valid.

We hope it helps our team to deal gentle with very burocratic and unnecessary law which is currently affecting negatively all eCommerces at Brazil.

## Build

Currently i setup build tasks for MacOs and Windows, but Linux is also supported.

### Building for Windows

1. Clone the directory
```
git clone https://github.com/lojabasico/gnre-injector
```
2. Run ```npm run build_windows```
3. A folder will be generated with the Executable App.

### Building for MacOs

1. Clone the directory
```
git clone https://github.com/lojabasico/gnre-injector
```
2. Run ```npm run build_macos```
3. A folder will be generated with the Executable App.

## Contribute

The project is open source and need several improvements, but i wont do it know due to time restrictions.
