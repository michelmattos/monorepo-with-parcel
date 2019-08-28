# monorepo-with-parcel
A React+Redux TodoMVC monorepo project (yarn workspaces) using parcel-bundler.

See https://github.com/parcel-bundler/parcel/pull/1101 and [third party modules](https://en.parceljs.org/transforms.html#third-party-modules) to know how to make parcel works with monorepo projects. You will also need to add `.babelrc` file to workspaces that needs experimental JS features (like `Stage-X`).
