# client-pembina-pizza-rn
# reasrt
## Requirements

1. OS X - This repo only contains the iOS implementation right now, and Xcode only runs on Mac.
2. New to Xcode?  [Download it](https://developer.apple.com/xcode/downloads/) from the Mac App Store. (its recommended to use xcode 9.4)
3. [Homebrew](http://brew.sh/) is the recommended way to install node, watchman, and flow.
4. New to node or npm? `brew install node`
5. We recommend installing [watchman](https://facebook.github.io/watchman/docs/install.html), otherwise you might hit a node file watching bug.  `brew install watchman`
6. If you want to use [flow](http://www.flowtype.org), `brew install flow`
7. Make sure you have set up for running and installing cocoa-pods


## Quick start

Get up and running with Pembina Pizza pp:

1. Once you have the repo cloned and met all the requirements above, start the
packager that will transform your JS code on-the-fly:



  ```
  npm install
  cd ios/
  rm -rf pembina.xcworkspace && rm Podfile.lock && rm -rf Pods
  pod install
  ```
2. Open the `pembina.xcworkspace` project in Xcode.
3. Select a simulator to run this app
4. Build and run the project with the Xcode run button.

In case if you face any issue while runnign the app , please raise an issue
